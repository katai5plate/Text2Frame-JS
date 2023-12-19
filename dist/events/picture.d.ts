import { BLEND_MODE, COLOR_TONE, EASING, PICTURE_ORIGIN } from "../constants";
import { C, Color4, DirectOrVariables } from "../type";
export declare const ShowPicture: C<{
    id: number;
    name: string;
    position?: {
        mode: DirectOrVariables;
        origin: keyof typeof PICTURE_ORIGIN;
        x: number;
        y: number;
    };
    scale?: {
        width: number;
        height: number;
    };
    blend?: {
        mode: keyof typeof BLEND_MODE;
        opacity: number;
    };
}>;
export declare const MovePicture: C<{
    id: number;
    position?: {
        mode: DirectOrVariables;
        origin: keyof typeof PICTURE_ORIGIN;
        x: number;
        y: number;
    };
    scale?: {
        width: number;
        height: number;
    };
    blend?: {
        mode: keyof typeof BLEND_MODE;
        opacity: number;
    };
    duration?: {
        time: number;
        wait: boolean;
    };
    easing?: keyof typeof EASING;
}>;
export declare const RotatePicture: C<{
    id: number;
    speed: number;
}>;
export declare const TintPicture: C<{
    id: number;
    color?: keyof typeof COLOR_TONE | Color4;
    time?: number;
}>;
export declare const ErasePicture: C<{
    id: number;
}>;
//# sourceMappingURL=picture.d.ts.map