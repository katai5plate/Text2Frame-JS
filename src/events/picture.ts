import { BLEND_MODE, COLOR_TONE, EASING, PICTURE_ORIGIN } from "../constants";
import { C, Color4, DirectOrVariables } from "../type";
import { arg, argPreset, argRange, joinSkip, tag } from "../validate";

export const ShowPicture: C<{
  id: number;
  name: string;
  position?: {
    mode: DirectOrVariables;
    origin: keyof typeof PICTURE_ORIGIN;
    x: number;
    y: number;
  };
  scale?: { width: number; height: number };
  blend?: { mode: keyof typeof BLEND_MODE; opacity: number };
}> = ({ id, name, position, scale, blend }) =>
  tag("ShowPicture", [
    argRange(id, { from: 1, to: 100 }),
    name,
    joinSkip(null, [
      position &&
        arg(position, (v, t) => {
          const parse =
            v.mode === "DIRECT"
              ? t.validInt
              : (x: number) => t.markVariableId({ variableId: x });
          return `Position[${t.markPreset(v.origin, PICTURE_ORIGIN)}][${parse(
            position.x
          )}][${parse(position.y)}]`;
        }),
      scale &&
        arg(
          scale,
          (v, t) => `Scale[${t.validInt(v.width)}][${t.validInt(v.height)}]`
        ),
      blend &&
        arg(
          blend,
          (v, t) =>
            `Blend[${t.validRange(v.opacity, 0, 255)}][${t.markPreset(
              v.mode,
              BLEND_MODE
            )}]`
        ),
    ]),
  ]);

export const MovePicture: C<{
  id: number;
  position?: {
    mode: DirectOrVariables;
    origin: keyof typeof PICTURE_ORIGIN;
    x: number;
    y: number;
  };
  scale?: { width: number; height: number };
  blend?: { mode: keyof typeof BLEND_MODE; opacity: number };
  duration?: { time: number; wait: boolean };
  easing?: keyof typeof EASING;
}> = ({ id, position, scale, blend, duration, easing }) =>
  tag("MovePicture", [
    argRange(id, { from: 1, to: 100 }),
    joinSkip(null, [
      position &&
        arg(position, (v, t) => {
          const parse =
            v.mode === "DIRECT"
              ? t.validInt
              : (x: number) => t.markVariableId({ variableId: x });
          return `Position[${t.markPreset(v.origin, PICTURE_ORIGIN)}][${parse(
            position.x
          )}][${parse(position.y)}]`;
        }),
      scale &&
        arg(
          scale,
          (v, t) => `Scale[${t.validInt(v.width)}][${t.validInt(v.height)}]`
        ),
      blend &&
        arg(
          blend,
          (v, t) =>
            `Blend[${t.validRange(v.opacity, 0, 255)}][${t.markPreset(
              v.mode,
              BLEND_MODE
            )}]`
        ),
      duration &&
        arg(
          duration,
          (v, t) => `Duration[${t.validInt(v.time)}][${v.wait ? "Wait" : ""}]`
        ),
      easing && argPreset(easing, EASING),
    ]),
  ]);

export const RotatePicture: C<{
  id: number;
  speed: number;
}> = ({ id, speed }) =>
  tag("RotatePicture", [
    argRange(id, { from: 1, to: 100 }),
    argRange(speed, { from: -90, to: 90 }),
  ]);

export const TintPicture: C<{
  id: number;
  color?: keyof typeof COLOR_TONE | Color4;
  time?: number;
}> = ({ id, color, time }) =>
  tag("TintPicture", [
    argRange(id, { from: 1, to: 100 }),
    joinSkip(null, [
      color &&
        arg(color, (v, t) => {
          if (typeof v === "string") return t.markPreset(v, COLOR_TONE);
          return t.markColorTone(v);
        }),
      time,
    ]),
  ]);

export const ErasePicture: C<{ id: number }> = ({ id }) =>
  tag("ErasePicture", [argRange(id, { from: 1, to: 100 })]);
