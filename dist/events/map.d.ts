import { CHARACTER, LOCATION } from "../constants";
import { C, VariableId } from "../type";
export declare const ChangeMapNameDisplay: C<{
    allow: boolean;
}>;
export declare const ChangeTileset: C<{
    id: number;
}>;
export declare const ChangeBattleBackGround: C<{
    images: [string?, string?];
}>;
export declare const ChangeParallax: C<{
    name: string;
    scroll: {
        x?: number;
        y?: number;
    };
}>;
type PositionType = {
    x: number;
    y: number;
} | {
    x: VariableId;
    y: VariableId;
};
export declare const GetLocationInfo: C<{
    id: VariableId;
    layer: keyof typeof LOCATION;
    position: PositionType | keyof typeof CHARACTER | number;
}>;
export {};
//# sourceMappingURL=map.d.ts.map