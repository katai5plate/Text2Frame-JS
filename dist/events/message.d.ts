import { CHOICES_CANCEL, CHOICES_INIT, ITEM_TYPE, WINDOW_BACKGROUND, WINDOW_POSITION_HORIZONTAL, WINDOW_POSITION_VERTICAL } from "../constants";
import { VariableId } from "../type";
export declare const Window: ({ face, position, background, name, }: {
    background?: "WINDOW" | "DIM" | "TRANSPARENT" | undefined;
    position?: "TOP" | "MIDDLE" | "BOTTOM" | undefined;
    face?: {
        name: string;
        index: number;
    } | undefined;
    name?: string | undefined;
}) => string;
export declare const ShowChoices: (cases: {
    name: string | null;
    then: string;
}[], { background, position, init, cancel, }: {
    background?: "WINDOW" | "DIM" | "TRANSPARENT" | undefined;
    position?: "MIDDLE" | "LEFT" | "RIGHT" | undefined;
    init?: number | "NONE" | "CASE_1" | "CASE_2" | "CASE_3" | "CASE_4" | "CASE_5" | "CASE_6" | undefined;
    cancel?: number | "CASE_1" | "CASE_2" | "CASE_3" | "CASE_4" | "CASE_5" | "CASE_6" | "BRANCH" | "DISALLOW" | undefined;
}) => string;
export declare const InputNumber: (id: VariableId, digit: number) => string;
export declare const SelectItem: (id: VariableId, itemType: keyof typeof ITEM_TYPE) => string;
export declare const ScrollingText: (text: string, { speed, noSkip }: {
    speed?: number | undefined;
    noSkip?: boolean | undefined;
}) => string;
//# sourceMappingURL=message.d.ts.map