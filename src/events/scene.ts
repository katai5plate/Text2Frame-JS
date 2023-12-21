import { BATTLE_TROOP, SHOP_ITEM } from "../constants";
import { VariableId } from "../type";
import {
  argId,
  argInt,
  argPreset,
  argRange,
  argVariableId,
  joinSkip,
  tag,
  typeCase,
} from "../validate";

export const BattleProcessing = (
  id: keyof typeof BATTLE_TROOP | VariableId | number,
  {
    ifWin,
    ifEscape,
    ifLose,
  }: {
    ifWin?: string;
    ifEscape?: string;
    ifLose?: string;
  }
) => {
  return joinSkip("\n", [
    tag("BattleProcessing", [
      typeCase(id, {
        string: (x) => argPreset(x, BATTLE_TROOP),
        variableId: argVariableId,
        number: argId,
      }),
    ]),
    ifWin ? joinSkip("\n", [tag("IfWin"), ifWin]) : undefined,
    ifEscape ? joinSkip("\n", [tag("IfEscape"), ifEscape]) : undefined,
    ifLose ? joinSkip("\n", [tag("IfLose"), ifLose]) : undefined,
    tag("End"),
  ]);
};

export const ShopProcessing = (
  items: {
    type: keyof typeof SHOP_ITEM;
    id: number;
    price: number;
  }[],
  purchaseOnly?: boolean
) =>
  joinSkip("\n", [
    tag("ShopProcessing", [purchaseOnly]),
    ...items.map(({ type, id, price }) =>
      tag("Merchandise", [argPreset(type, SHOP_ITEM), argId(id), argInt(price)])
    ),
  ]);

export const NameInputProcessing = (id: number, length: number) =>
  tag("NameInputProcessing", [argId(id), argRange(length, { from: 1, to: 8 })]);

export const OpenMenuScreen = () => tag("OpenMenuScreen");
export const OpenSaveScreen = () => tag("OpenSaveScreen");
export const GameOver = () => tag("GameOver");
export const ReturnToTitleScreen = () => tag("ReturnToTitleScreen");
