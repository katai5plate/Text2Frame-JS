export { parse } from "./parse";

import * as actor from "./events/actor";
import * as battle from "./events/battle";
import * as character from "./events/character";
import * as flow from "./events/flow";
import * as interpreter from "./events/interpreter";
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

export const events = {
  message,
  progress,
  flow,
  party,
  actor,
  movement,
  character,
  picture,
  screen,
  media,
  scene,
  system,
  map,
  battle,
  interpreter,
};

import TF from "Text2Frame-MV/Text2Frame.mjs";
/**
 * Text2Frame の文法で書かれた文字列を RPG Maker MV/MZ のイベントコマンドリストに変換する。
 * @param text Text2Frame の文法で書かれた文字列
 * @return {{ code: number; parameters: any[]; indent: number }[]}
 */
export const convert = TF.convert;
