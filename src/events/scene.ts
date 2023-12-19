import { BATTLE_TROOP, SHOP_ITEM } from "../constants";
import { C, VariableId } from "../type";
import {
  arg,
  argId,
  argInt,
  argPreset,
  argRange,
  joinSkip,
  tag,
} from "../validate";

export const BattleProcessing: C<{
  id: keyof typeof BATTLE_TROOP | VariableId | number;
  ifWin?: string[];
  ifEscape?: string[];
  ifLose?: string[];
}> = ({ id, ifWin, ifEscape, ifLose }) => {
  return joinSkip("\n", [
    tag("BattleProcessing", [
      arg(id, (v, t) => {
        if (typeof v === "string") return t.markPreset(v, BATTLE_TROOP);
        if (t.isVariableId(v)) return t.markVariableId(v);
        return t.validId(v);
      }),
    ]),
    ...(ifWin ? [tag("IfWin"), ifWin] : []),
    ...(ifEscape ? [tag("IfEscape"), ifEscape] : []),
    ...(ifLose ? [tag("IfLose"), ifLose] : []),
    tag("End"),
  ]);
};

export const ShopProcessing: C<{
  items: {
    type: keyof typeof SHOP_ITEM;
    id: number;
    price: number;
  }[];
  purchaseOnly?: boolean;
}> = ({ items, purchaseOnly }) =>
  joinSkip("\n", [
    tag("ShopProcessing", [purchaseOnly]),
    ...items.map(({ type, id, price }) =>
      tag("Merchandise", [argPreset(type, SHOP_ITEM), argId(id), argInt(price)])
    ),
  ]);

export const NameInputProcessing: C<{
  id: number;
  length: number;
}> = ({ id, length }) =>
  tag("NameInputProcessing", [argId(id), argRange(length, { from: 1, to: 8 })]);

export const OpenMenuScreen: C = () => tag("OpenMenuScreen");
export const OpenSaveScreen: C = () => tag("OpenSaveScreen");
export const GameOver: C = () => tag("GameOver");
export const ReturnToTitleScreen: C = () => tag("ReturnToTitleScreen");
