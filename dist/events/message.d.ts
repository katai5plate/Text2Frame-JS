import { ITEM_TYPE, WINDOW_BACKGROUND, WINDOW_POSITION_VERTICAL } from "../constants";
import { C, VariableId } from "../type";
export declare const Message: C<{
    children: string | string[];
}>;
export declare const M: C<{
    children: string | string[];
}>;
export declare const Window: C<{
    background?: keyof typeof WINDOW_BACKGROUND;
    position?: keyof typeof WINDOW_POSITION_VERTICAL;
    face?: {
        name: string;
        index: number;
    };
    name?: string;
}>;
declare const ChoicesWhen: C<{
    name: string;
    children?: string[];
}>;
declare const ChoicesCancel: C<{
    children: string[];
}>;
type ChoiceWhenElement = ReturnType<typeof ChoicesWhen> | ReturnType<typeof ChoicesCancel>;
export declare const Choices: {
    Show: C<{
        background?: "WINDOW" | "DIM" | "TRANSPARENT" | undefined;
        position?: "MIDDLE" | "LEFT" | "RIGHT" | undefined;
        init?: number | "NONE" | undefined;
        cancel?: number | "BRANCH" | "DISALLOW" | undefined;
        children: ChoiceWhenElement | ChoiceWhenElement[];
    }>;
    When: C<{
        name: string;
        children?: string[] | undefined;
    }>;
    Cancel: C<{
        children: string[];
    }>;
};
export declare const InputNumber: C<{
    id: VariableId;
    digit: number;
}>;
export declare const SelectItem: C<{
    id: VariableId;
    itemType: keyof typeof ITEM_TYPE;
}>;
export declare const ScrollingText: C<{
    speed?: number;
    noSkip?: boolean;
    text: string[];
}>;
export {};
//# sourceMappingURL=message.d.ts.map