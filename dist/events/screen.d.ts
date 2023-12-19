import { COLOR_TONE, WEATHER } from "../constants";
import { C, Color4 } from "../type";
export declare const FadeOut: C;
export declare const FadeIn: C;
export declare const TintScreen: C<{
    color?: keyof typeof COLOR_TONE | Color4;
    time?: number;
}>;
export declare const FlashScreen: C<{
    color: Color4;
    time: number;
    wait?: boolean;
}>;
export declare const ShakeScreen: C<{
    velocity: number;
    speed: number;
    time: number;
    wait?: boolean;
}>;
export declare const SetWeatherEffect: C<{
    weather: keyof typeof WEATHER;
    velocity: number;
    time: number;
    wait?: boolean;
}>;
//# sourceMappingURL=screen.d.ts.map