import { C } from "../type";
export declare const Check: C<{
    condition: string;
    then: string[];
    otherwise?: string[];
}>;
export declare const Loop: C<{
    children: string[];
}>;
export declare const LoopBreak: C;
export declare const BreakLoop: C;
export declare const ExitEventProcessing: C;
export declare const CommonEvent: C<{
    id: number;
}>;
export declare const Label: C<{
    name: string;
}>;
export declare const Goto: C<{
    name: string;
}>;
export declare const JumpToLabel: C<{
    name: string;
}>;
export declare const Comment: C<{
    text: string[];
}>;
//# sourceMappingURL=flow.d.ts.map