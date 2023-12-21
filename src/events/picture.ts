import { BLEND_MODE, COLOR_TONE, EASING, PICTURE_ORIGIN } from "../constants";
import { C, Color4, DirectOrVariables } from "../type";
import {
  argColorTone,
  argInt,
  argPreset,
  argRange,
  argVariableId,
  joinSkip,
  tag,
} from "../validate";

const argPicturePosition = (position: {
  mode: DirectOrVariables;
  origin: keyof typeof PICTURE_ORIGIN;
  x: number;
  y: number;
}) => {
  const parse =
    position.mode === "DIRECT"
      ? argInt
      : (variableId: number) => argVariableId({ variableId });
  return `Position[${argPreset(position.origin, PICTURE_ORIGIN)}][${parse(
    position.x
  )}][${parse(position.y)}]`;
};
const argPictureScale = (size: { width: number; height: number }) =>
  `Scale[${argInt(size.width)}][${argInt(size.height)}]`;
const argPictureBlend = (blend: {
  opacity: number;
  mode: keyof typeof BLEND_MODE;
}) =>
  `Blend[${argRange(blend.opacity, { from: 0, to: 255 })}][${argPreset(
    blend.mode,
    BLEND_MODE
  )}]`;
const argPictureDuration = (duration: { time: number; wait: boolean }) =>
  `Duration[${argInt(duration.time)}][${duration.wait ? "Wait" : ""}]`;

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
      position && argPicturePosition(position),
      scale && argPictureScale(scale),
      blend && argPictureBlend(blend),
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
      position && argPicturePosition(position),
      scale && argPictureScale(scale),
      blend && argPictureBlend(blend),
      duration && argPictureDuration(duration),
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
    joinSkip(null, [color && argColorTone(color), time]),
  ]);

export const ErasePicture: C<{ id: number }> = ({ id }) =>
  tag("ErasePicture", [argRange(id, { from: 1, to: 100 })]);
