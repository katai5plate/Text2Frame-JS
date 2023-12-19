import { C } from "../type";
export declare const Wait: C<{
    time: number;
}>;
export declare const Script: C<{
    code: string[];
}>;
export declare const PluginCommandMV: C<{
    command: string;
}>;
export declare const PluginCommandMZ: C<{
    name: string;
    method: string;
    command: string;
    args: {
        name: string;
        value: any;
    }[];
}>;
//# sourceMappingURL=interpreter.d.ts.map