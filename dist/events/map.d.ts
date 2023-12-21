import { CHARACTER, LOCATION } from "../constants";
import { VariableId } from "../type";
export declare const ChangeMapNameDisplay: (allow: boolean) => string;
export declare const ChangeTileset: (id: number) => string;
export declare const ChangeBattleBackGround: (images: [string?, string?]) => string;
export declare const ChangeParallax: (name: string, scroll: {
    x?: number;
    y?: number;
}) => string;
type PositionType = {
    x: number;
    y: number;
} | {
    x: VariableId;
    y: VariableId;
};
export declare const GetLocationInfo: (variableId: number, layer: keyof typeof LOCATION, position: PositionType | keyof typeof CHARACTER | number) => string;
export {};
//# sourceMappingURL=map.d.ts.map