import { BLEND_MODE, COLOR_TONE, EASING, PICTURE_ORIGIN } from "../constants";
import { Color4, DirectOrVariables } from "../type";
export declare const ShowPicture: (id: number, name: string, { position, scale, blend, }: {
    position?: {
        mode: DirectOrVariables;
        origin: keyof typeof PICTURE_ORIGIN;
        x: number;
        y: number;
    } | undefined;
    scale?: {
        width: number;
        height: number;
    } | undefined;
    blend?: {
        mode: keyof typeof BLEND_MODE;
        opacity: number;
    } | undefined;
}) => string;
export declare const MovePicture: (id: number, { position, scale, blend, duration, easing, }: {
    position?: {
        mode: DirectOrVariables;
        origin: keyof typeof PICTURE_ORIGIN;
        x: number;
        y: number;
    } | undefined;
    scale?: {
        width: number;
        height: number;
    } | undefined;
    blend?: {
        mode: keyof typeof BLEND_MODE;
        opacity: number;
    } | undefined;
    duration?: {
        time: number;
        wait: boolean;
    } | undefined;
    easing?: "LINEAR" | "IN" | "OUT" | "IN_OUT" | undefined;
}) => string;
export declare const RotatePicture: (id: number, speed: number) => string;
export declare const TintPicture: (id: number, color?: keyof typeof COLOR_TONE | Color4, time?: number) => string;
export declare const ErasePicture: (id: number) => string;
//# sourceMappingURL=picture.d.ts.map