import { COLOR_TONE, WEATHER } from "../constants";
import { C, Color4 } from "../type";
import {
  argColorTone,
  argInt,
  argPreset,
  argsColor,
  joinSkip,
  tag,
} from "../validate";

export const FadeOut: C = () => tag("FadeOut");
export const FadeIn: C = () => tag("FadeIn");

export const TintScreen: C<{
  color?: keyof typeof COLOR_TONE | Color4;
  time?: number;
}> = ({ color, time }) =>
  tag("TintScreen", [joinSkip(null, [color && argColorTone(color), time])]);

export const FlashScreen: C<{
  color: Color4;
  time: number;
  wait?: boolean;
}> = ({ color, time, wait }) =>
  tag("FlashScreen", [argsColor(color), time, wait]);

export const ShakeScreen: C<{
  velocity: number;
  speed: number;
  time: number;
  wait?: boolean;
}> = ({ velocity, speed, time, wait }) =>
  tag("ShakeScreen", [argInt(velocity), argInt(speed), argInt(time), wait]);

export const SetWeatherEffect: C<{
  weather: keyof typeof WEATHER;
  velocity: number;
  time: number;
  wait?: boolean;
}> = ({ weather, velocity, time, wait }) =>
  tag("SetWeatherEffect", [
    argPreset(weather, WEATHER),
    argInt(velocity),
    argInt(time),
    wait,
  ]);
