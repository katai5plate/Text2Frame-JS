export { ev } from "./parse";

import * as actor from "./events/actor";
import * as battle from "./events/battle";
import * as character from "./events/character";
import * as etc from "./events/etc";
import * as flow from "./events/flow";
import * as map from "./events/map";
import * as media from "./events/media";
import * as message from "./events/message";
import * as movement from "./events/movement";
import * as party from "./events/party";
import * as picture from "./events/picture";
import * as progress from "./events/progress";
import * as scene from "./events/scene";
import * as screen from "./events/screen";
import * as system from "./events/system";

/** イベントコマンド関数 */
export const cmd = {
  /** メッセージ */
  message,
  /** ゲーム進行 */
  progress,
  /** フロー制御 */
  flow,
  /** パーティ */
  party,
  /** アクター */
  actor,
  /** 移動 */
  movement,
  /** キャラクター */
  character,
  /** ピクチャ */
  picture,
  /** 画面 */
  screen,
  /** オーディオ・ビデオ */
  media,
  /** シーン制御 */
  scene,
  /** システム設定 */
  system,
  /** マップ*/
  map,
  /** バトル */
  battle,
  /** ウェイト・上級 */
  etc,
};

import TF from "Text2Frame-MV/Text2Frame.mjs";

/**
 * Text2Frame の文法で書かれた文字列を RPG Maker MV/MZ のイベントコマンドリストに変換する。
 *
 * ```js
 * const text = ev(
 *   cmd.message.Window({ name: "アレックス" }),
 *   "この先生きのこ",
 * )
 * const list = convert(text);
 * ```
 *
 * @param text Text2Frame の文法で書かれた文字列
 */
export const convert = (text: string) => TF.convert(text);
