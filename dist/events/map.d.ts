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
export declare const GetLocationInfo: C<{
    id: VariableId;
    layer: keyof typeof LOCATION;
    position: {
        x: number;
        y: number;
    } | {
        x: VariableId;
        y: VariableId;
    } | keyof typeof CHARACTER | number;
}>;
//# sourceMappingURL=map.d.ts.map