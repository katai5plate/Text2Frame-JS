import {
  CHOICES_CANCEL,
  CHOICES_INIT,
  ITEM_TYPE,
  WINDOW_BACKGROUND,
  WINDOW_POSITION_HORIZONTAL,
  WINDOW_POSITION_VERTICAL,
} from "../constants";
import { C, VariableId } from "../type";
import { arg, joinSkip, tag } from "../validate";

export const Message: C<{ children: string | string[] }> = ({ children }) =>
  Array.isArray(children) ? children.join("\n") : children;
export const M = Message;

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

const ChoicesWhen: C<{
  name: string;
  children?: string[];
}> = ({ name, children }) => joinSkip("\n", [tag("When", [name]), children]);
const ChoicesCancel: C<{
  children: string[];
}> = ({ children }) => joinSkip("\n", [tag("WhenCancel"), children]);
type ChoiceWhenElement =
  | ReturnType<typeof ChoicesWhen>
  | ReturnType<typeof ChoicesCancel>;
const ShowChoices: C<{
  background?: keyof typeof WINDOW_BACKGROUND;
  position?: keyof typeof WINDOW_POSITION_HORIZONTAL;
  init?: keyof typeof CHOICES_INIT | number;
  cancel?: keyof typeof CHOICES_CANCEL | number;
  children: ChoiceWhenElement | ChoiceWhenElement[];
}> = ({ background, position, init, cancel, children }) =>
  joinSkip("\n", [
    tag("ShowChoices", [
      background,
      position,
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
    children,
    tag("End"),
  ]);
export const Choices = {
  Show: ShowChoices,
  When: ChoicesWhen,
  Cancel: ChoicesCancel,
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
  text: string[];
}> = ({ speed = 2, noSkip, text }) =>
  tag("ScrollingText", [speed, noSkip], text);
