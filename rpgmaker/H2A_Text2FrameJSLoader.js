/*:
 * @target MZ
 * @plugindesc Text2Frame-JS 対応の外部 JS をロードします。
 * @author Had2Apps
 * @url https://had2apps.com/
 *
 * @command run
 *   @text 実行
 *   @arg $path
 *     @text 実行するファイル名（拡張子なし）
 *     @type string
 *     @default path/to
 *   @arg $files
 *     @text 直前にプリロードする素材
 *     @type file[]
 *     @default []
 *
 * @help
 * 使用には js/libs/Text2Frame-JS.umd.js が必要です。
 *
 * 使用方法:
 * 1. js/libs に Text2Frame-JS.umd.js を入れる
 * DL: https://raw.githubusercontent.com/katai5plate/Text2Frame-JS/main/dist/Text2Frame-JS.umd.js
 * 2. js/text2frame フォルダを作成する
 * 3. 中に Text2Frame-JS.d.ts を入れる
 * DL: https://raw.githubusercontent.com/katai5plate/Text2Frame-JS/main/dist/Text2Frame-JS.d.ts
 * 4. 中に対応 JS を作る
 * 書き方: https://github.com/katai5plate/Text2Frame-JS/blob/main/README.md
 * 5. このプラグインをプラグインマネージャで有効化する
 * 6. プラグインコマンドから「実行」する
 *
 * Copyright (c) 2023 Had2Apps
 * This software is released under the MIT License.
 */
(() => {
  const lib = document.createElement("script");
  lib.type = "text/javascript";
  lib.src = "js/libs/Text2Frame-JS.umd.js";
  lib.async = false;
  lib.defer = true;
  lib.onload = main.onScriptLoad.bind(this);
  lib.onerror = main.onScriptError.bind(this);
  lib._url = lib.src;
  document.body.appendChild(lib);

  const pluginName = document.currentScript.src.match(/^.*\/(.*).js$/)[1];
  const isTest = () => Utils.isOptionValid("test");

  const parsePath = (path) => {
    const parts = path.split("/");
    const base = parts[0];
    const folder = parts.slice(1, -1).join("/");
    const [name, ext] = parts.pop().split(".");
    const file = `${name}${ext ? `.${ext}` : ""}`;
    return {
      base,
      folder,
      name,
      ext,
      path,
      file,
      dir: path.replace(file, ""),
    };
  };

  const stopInterpreter = (interpreter) => {
    interpreter._waitCount = Number.MAX_SAFE_INTEGER;
  };
  const resumeInterpreter = (interpreter) => {
    interpreter._waitCount = 0;
  };
  const replacePluginCommandToList = (interpreter, list) => {
    const after = interpreter._list.reduce((p, c, i) => {
      if (c.code === 357 && interpreter._list[i + 1]?.code === 657) {
        while (interpreter._list[i + 1]?.code === 657) i++;
        p.push(...list);
      } else if (!(c.code === 657 && interpreter._list[i - 1]?.code === 357)) {
        p.push(c);
      }
      return p;
    }, []);
    interpreter._list = after;
  };

  const preload = (list, interpreter) =>
    new Promise((resolve) => {
      const IMAGE_EXT = ".png";
      const RETRY_MS = 1000 / 60;

      const now = Date.now();

      const files = JSON.parse(list).map((f) => parsePath(f));
      const loadedAudioPathList = [];

      stopInterpreter(interpreter);

      files.forEach(({ base, folder, name, path }) => {
        if (base === "img") {
          return ImageManager.loadBitmap(`${base}/${folder}/`, name);
        }
        if (base === "audio") {
          const audio = AudioManager.createBuffer(`${folder}/`, name);
          audio.addLoadListener(() => {
            loadedAudioPathList.push(path);
          });
          return;
        }
        throw new Error("プリロード未対応のファイル形式: " + base);
      });

      const i = setInterval(() => {
        const isReady = files.reduce((_, { base, path }) => {
          if (base === "img") {
            return ImageManager._cache[path + IMAGE_EXT]?.isReady();
          }
          if (base === "audio") {
            return loadedAudioPathList.includes(path);
          }
        }, true);
        if (isReady) {
          resumeInterpreter(interpreter);
          clearInterval(i);
          resolve(Date.now() - now);
        }
      }, RETRY_MS);
    });

  PluginManager.registerCommand(
    pluginName,
    "run",
    function ({ $path, $files }) {
      stopInterpreter(this);
      preload($files, this).then((time) => {
        if (isTest()) console.log("preload:", time / 1000, "sec");
        const js = `${parsePath(location.href).dir}js/text2frame/${$path}.js`;
        import(js).then((mod) => {
          const list = Text2FrameJS.convert(mod.default);
          if (isTest()) console.log("inject:", js, list);
          replacePluginCommandToList(
            this,
            list.map((el) => ({
              ...el,
              indent: el.indent + this._indent,
            }))
          );
          this._index--;
          resumeInterpreter(this);
        });
      });
    }
  );
})();
