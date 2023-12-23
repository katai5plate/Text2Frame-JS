import { COLOR_TONE, WEATHER } from "../constants";
import { Color4 } from "../type";
import {
  argColorTone,
  argInt,
  argPreset,
  argsColor,
  joinSkip,
  tag,
} from "../validate";

export const FadeOut = () => tag("FadeOut");
export const FadeIn = () => tag("FadeIn");

export const TintScreen = (
  color?: keyof typeof COLOR_TONE | Color4,
  time?: number,
  wait?: boolean
) =>
  tag("TintScreen", [
    joinSkip(null, [
      color && argColorTone(color),
      time && `Duration[${time}][${wait ? "Wait" : ""}]`,
    ]),
  ]);

export const FlashScreen = (color: Color4, time: number, wait?: boolean) =>
  tag("FlashScreen", [argsColor(color), time, wait]);

export const ShakeScreen = (
  velocity: number,
  speed: number,
  time: number,
  wait?: boolean
) => tag("ShakeScreen", [argInt(velocity), argInt(speed), argInt(time), wait]);

export const SetWeatherEffect = (
  weather: keyof typeof WEATHER,
  velocity: number,
  time: number,
  wait?: boolean
) =>
  tag("SetWeatherEffect", [
    argPreset(weather, WEATHER),
    argInt(velocity),
    argInt(time),
    wait,
  ]);
