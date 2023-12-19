import { CHOICES_CANCEL, CHOICES_INIT, ITEM_TYPE, WINDOW_BACKGROUND, WINDOW_POSITION_HORIZONTAL, WINDOW_POSITION_VERTICAL } from "../constants";
import { C, VariableId } from "../type";
export declare const Window: C<{
    background?: keyof typeof WINDOW_BACKGROUND;
    position?: keyof typeof WINDOW_POSITION_VERTICAL;
    face?: {
        name: string;
        index: number;
    };
    name?: string;
}>;
export declare const ShowChoices: C<{
    background?: keyof typeof WINDOW_BACKGROUND;
    position?: keyof typeof WINDOW_POSITION_HORIZONTAL;
    init?: keyof typeof CHOICES_INIT | number;
    cancel?: keyof typeof CHOICES_CANCEL | number;
    cases: {
        name: string | null;
        then: string;
    }[];
}>;
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
    text: string;
}>;
//# sourceMappingURL=message.d.ts.map