import {
  CHOICES_CANCEL,
  CHOICES_INIT,
  ITEM_TYPE,
  WINDOW_BACKGROUND,
  WINDOW_POSITION_HORIZONTAL,
  WINDOW_POSITION_VERTICAL,
} from "../constants";
import { argId, argPreset, argRange, joinSkip, tag } from "../validate";

const argChoices = <P extends Record<string, string>>(
  value: keyof P | number,
  preset: P
) =>
  typeof value === "number"
    ? argRange(value, { from: 1, to: 6 })
    : argPreset(value as string, preset);

export const Window = ({
  face,
  position,
  background,
  name,
}: {
  background?: keyof typeof WINDOW_BACKGROUND;
  position?: keyof typeof WINDOW_POSITION_VERTICAL;
  face?: { name: string; index: number };
  name?: string;
}) =>
  joinSkip("\n", [
    background && tag("Background", [argPreset(background, WINDOW_BACKGROUND)]),
    position &&
      tag("WindowPosition", [argPreset(position, WINDOW_POSITION_VERTICAL)]),
    face &&
      tag("Face", [
        `${face.name}(${argRange(face.index, { from: 0, to: 15 })})`,
      ]),
    name && tag("Name", [name]),
  ]);

export const ShowChoices = (
  cases: {
    name: string | null;
    then?: string;
  }[],
  {
    background,
    position,
    init,
    cancel,
  }: {
    background?: keyof typeof WINDOW_BACKGROUND;
    position?: keyof typeof WINDOW_POSITION_HORIZONTAL;
    init?: keyof typeof CHOICES_INIT | number;
    cancel?: keyof typeof CHOICES_CANCEL | number;
  }
) => {
  if (cases.filter((caseItem) => caseItem.name === null).length >= 2)
    throw new Error("キャンセル扱いとなる name=null は複数設定できません");
  return joinSkip("\n", [
    tag("ShowChoices", [
      background && argPreset(background, WINDOW_BACKGROUND),
      position && argPreset(position, WINDOW_POSITION_HORIZONTAL),
      init && argChoices(init, CHOICES_INIT),
      cancel && argChoices(cancel, CHOICES_CANCEL),
    ]),
    joinSkip(
      "\n",
      cases.map(({ name, then }) =>
        joinSkip("\n", [
          joinSkip("\n", [
            name ? tag("When", [name]) : tag("WhenCancel"),
            then && then !== "" ? joinSkip("\n", [then]) : undefined,
          ]),
        ])
      )
    ),
    tag("End"),
  ]);
};

export const InputNumber = (variableId: number, digit: number) =>
  tag("InputNumber", [argId(variableId), argRange(digit, { from: 1, to: 8 })]);

export const SelectItem = (
  variableId: number,
  itemType: keyof typeof ITEM_TYPE
) => tag("SelectItem", [argId(variableId), argPreset(itemType, ITEM_TYPE)]);

export const ScrollingText = (
  text: string,
  { speed = 2, noSkip }: { speed?: number; noSkip?: boolean }
) => tag("ScrollingText", [speed, noSkip], text);
