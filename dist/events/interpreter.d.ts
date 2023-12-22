import rmmz from "rpgmz-typescript/types/index";
export declare const Wait: (time: number) => string;
export declare const Script: (code: (globalThis: typeof rmmz) => unknown) => string;
export declare const PluginCommandMV: (command: string) => string;
export declare const PluginCommandMZ: (name: string, method: string, command: string, args: {
    name: string;
    value: any;
}[]) => string;
//# sourceMappingURL=interpreter.d.ts.map