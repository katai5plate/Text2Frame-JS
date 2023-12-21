import { COLOR_TONE, WEATHER } from "../constants";
import { Color4 } from "../type";
export declare const FadeOut: () => string;
export declare const FadeIn: () => string;
export declare const TintScreen: (color?: keyof typeof COLOR_TONE | Color4, time?: number) => string;
export declare const FlashScreen: (color: Color4, time: number, wait?: boolean) => string;
export declare const ShakeScreen: (velocity: number, speed: number, time: number, wait?: boolean) => string;
export declare const SetWeatherEffect: (weather: keyof typeof WEATHER, velocity: number, time: number, wait?: boolean) => string;
//# sourceMappingURL=screen.d.ts.map