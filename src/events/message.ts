import {
  CHOICES_CANCEL,
  CHOICES_INIT,
  ITEM_TYPE,
  WINDOW_BACKGROUND,
  WINDOW_POSITION_HORIZONTAL,
  WINDOW_POSITION_VERTICAL,
} from "../constants";
import { C, VariableId } from "../type";
import { arg, argPreset, joinSkip, tag } from "../validate";

export const Window: C<{
  background?: keyof typeof WINDOW_BACKGROUND;
  position?: keyof typeof WINDOW_POSITION_VERTICAL;
  face?: { name: string; index: number };
  name?: string;
}> = ({ face, position, background, name }) =>
  joinSkip("\n", [
    background && tag("Background", [background]),
    position && tag("WindowPosition", [position]),
    face &&
      tag("Face", [
        `${face.name}(${arg(face.index, (v, t) => t.validRange(v, 0, 15))})`,
      ]),
    name && tag("Name", [name]),
  ]);

export const ShowChoices: C<{
  background?: keyof typeof WINDOW_BACKGROUND;
  position?: keyof typeof WINDOW_POSITION_HORIZONTAL;
  init?: keyof typeof CHOICES_INIT | number;
  cancel?: keyof typeof CHOICES_CANCEL | number;
  cases: {
    name: string | null;
    then: string;
  }[];
}> = ({ background, position, init, cancel, cases }) => {
  if (cases.filter((caseItem) => caseItem.name === null).length >= 2)
    throw new Error("キャンセル扱いとなる name=null は複数設定できません");
  return joinSkip("\n", [
    tag("ShowChoices", [
      background && argPreset(background, WINDOW_BACKGROUND),
      position && argPreset(position, WINDOW_POSITION_HORIZONTAL),
      init &&
        arg(init, (v, t) =>
          typeof v === "number"
            ? t.validRange(v, 1, 6)
            : t.markPreset(v, CHOICES_INIT)
        ),
      cancel &&
        arg(cancel, (v, t) =>
          typeof v === "number"
            ? t.validRange(v, 1, 6)
            : t.markPreset(v, CHOICES_CANCEL)
        ),
    ]),
    joinSkip(
      "\n",
      cases.map(({ name, then }) =>
        joinSkip("\n", [
          joinSkip("\n", [
            name ? tag("When", [name]) : tag("WhenCancel"),
            joinSkip("\n", [then]),
          ]),
        ])
      )
    ),
    tag("End"),
  ]);
};

export const InputNumber: C<{
  id: VariableId;
  digit: number;
}> = ({ id, digit }) =>
  tag("InputNumber", [
    arg(id, (v, t) => t.markVariableId(v)),
    arg(digit, (v, t) => t.validRange(digit, 1, 8)),
  ]);

export const SelectItem: C<{
  id: VariableId;
  itemType: keyof typeof ITEM_TYPE;
}> = ({ id, itemType }) =>
  tag("SelectItem", [
    arg(id, (v, t) => t.markVariableId(v)),
    arg(itemType, (v, t) => t.markPreset(v, ITEM_TYPE)),
  ]);

export const ScrollingText: C<{
  speed?: number;
  noSkip?: boolean;
  text: string;
}> = ({ speed = 2, noSkip, text }) =>
  tag("ScrollingText", [speed, noSkip], text);
