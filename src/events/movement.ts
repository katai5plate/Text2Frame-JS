import {
  BLEND_MODE,
  CHARACTER,
  CHARACTER_FREQ,
  CHARACTER_SPEED,
  DIRECTION,
  DIRECTION_CAR,
  DIRECTION_METHOD,
  DIRECTION_RETAIN,
  DIRECTION_ROUTE8,
  DIRECTION_TURN_METHOD,
  EVENT,
  FADE,
  VEHICLE,
} from "../constants";
import {
  ArgValue,
  C,
  MapPosition,
  DirectOrVariables,
  Sound,
  VariableId,
} from "../type";
import {
  arg,
  argId,
  argInt,
  argPreset,
  argRange,
  joinSkip,
  tag,
} from "../validate";

export const TransferPlayer: C<{
  mode: DirectOrVariables;
  position: MapPosition;
  direction: keyof typeof DIRECTION_RETAIN;
  fade: keyof typeof FADE;
}> = ({ mode, position, direction, fade }) =>
  tag("TransferPlayer", [
    arg(position, (v, t) => t.markMapPosition(v, mode)),
    arg(direction, (v, t) => t.markPreset(v, DIRECTION_RETAIN)),
    arg(fade, (v, t) => t.markPreset(v, FADE)),
  ]);

export const SetVehicleLocation: C<{
  mode: DirectOrVariables;
  vehicle: keyof typeof VEHICLE;
  position: MapPosition;
}> = ({ mode, vehicle, position }) =>
  tag("SetVehicleLocation", [
    arg(vehicle, (v, t) => t.markPreset(v, VEHICLE)),
    arg(position, (v, t) => t.markMapPosition(v, mode)),
  ]);

export const SetEventLocation: C<{
  mode: DirectOrVariables | "EXCHANGE";
  id: keyof typeof EVENT | number;
  position: MapPosition | keyof typeof EVENT | number;
  direction: keyof typeof DIRECTION_RETAIN;
}> = ({ mode, id, position, direction }) =>
  tag("SetEventLocation", [
    arg(id, (v, t) =>
      typeof v === "number" ? t.validId(v) : t.markPreset(v, EVENT)
    ),
    mode === "EXCHANGE"
      ? arg(position, (v, t) => {
          const exchange = (x: string | number) => `Exchange[${x}]`;
          if (typeof v === "string") return exchange(t.markPreset(v, EVENT));
          if (typeof v === "number") return exchange(t.validId(v));
          throw new Error("不正なマップ位置指定です");
        })
      : arg(position, (v, t) => {
          if (t.isMapPosition(v)) return t.markMapPosition(v, mode);
          throw new Error("不正なマップ位置指定です");
        }),
    arg(direction, (v, t) => t.markPreset(v, DIRECTION_RETAIN)),
  ]);

export const ScrollMap: C<{
  direction: keyof typeof DIRECTION;
  step: number;
  speed: keyof typeof CHARACTER_SPEED;
  wait?: boolean;
}> = ({ direction, step, speed, wait }) =>
  tag("SetVehicleLocation", [
    arg(direction, (v, t) => t.markPreset(v, DIRECTION)),
    argInt(step),
    arg(speed, (v, t) => t.markPreset(v, CHARACTER_SPEED)),
    wait,
  ]);

type RouteCode = { name: string; args: ArgValue[] };
interface Route {
  jump: (x: number, y: number) => RouteCode;
  wait: (v: number) => RouteCode;
  changeSwitch: (id: number, to: boolean) => RouteCode;
  changeSpeed: (speed: keyof typeof CHARACTER_SPEED) => RouteCode;
  changeFreq: (freq: keyof typeof CHARACTER_FREQ) => RouteCode;
  changeImage: (name: string, index: number) => RouteCode;
  changeOpacity: (v: number) => RouteCode;
  changeBlendMode: (v: keyof typeof BLEND_MODE) => RouteCode;
  playSe: (sound: Sound) => RouteCode;
  script: (code: string) => RouteCode;
  //
  move: (
    dir: keyof typeof DIRECTION_ROUTE8 | keyof typeof DIRECTION_METHOD
  ) => RouteCode;
  turn: (
    dir:
      | keyof typeof DIRECTION
      | keyof typeof DIRECTION_METHOD
      | keyof typeof DIRECTION_TURN_METHOD
  ) => RouteCode;
  step: (dir: keyof typeof DIRECTION_CAR) => RouteCode;
  //
  changeWalkAnimation: (active: boolean) => RouteCode;
  changeStepAnimation: (active: boolean) => RouteCode;
  changeDirectionFix: (active: boolean) => RouteCode;
  changeNoClip: (active: boolean) => RouteCode;
  changeTransparent: (active: boolean) => RouteCode;
}
export const SetMovementRoute: C<{
  id: keyof typeof CHARACTER | number;
  repeat: boolean;
  skip: boolean;
  wait: boolean;
  routes: (route: Route) => string[];
}> = ({ id, repeat, skip, wait, routes }) =>
  joinSkip("\n", [
    tag("SetMovementRoute", [
      arg(id, (v, t) =>
        typeof v === "number" ? t.validId(v) : t.markPreset(v, CHARACTER)
      ),
      repeat,
      skip,
      wait,
    ]),
    ...routes({
      jump: (x: number, y: number) => {
        return { name: "Jump", args: [argInt(x), argInt(y)] };
      },
      wait: (v: number) => {
        return { name: "McWait", args: [argInt(v)] };
      },
      changeSwitch: (id: number, to: boolean) => {
        return { name: `Switch${to ? "On" : "Off"}`, args: [argId(id)] };
      },
      changeSpeed: (speed: keyof typeof CHARACTER_SPEED) => {
        return {
          name: "ChangeSpeed",
          args: [argPreset(speed, CHARACTER_SPEED)],
        };
      },
      changeFreq: (freq: keyof typeof CHARACTER_FREQ) => {
        return {
          name: "ChangeFrequency",
          args: [argPreset(freq, CHARACTER_FREQ)],
        };
      },
      changeImage: (name: string, index: number) => {
        return {
          name: "ChangeImage",
          args: [name, argRange(index, { from: 0, to: 7 })],
        };
      },
      changeOpacity: (v: number) => {
        return {
          name: "ChangeOpacity",
          args: [argRange(v, { from: 0, to: 255 })],
        };
      },
      changeBlendMode: (v: keyof typeof BLEND_MODE) => {
        return { name: "ChangeBlendMode", args: [argPreset(v, BLEND_MODE)] };
      },
      playSe: (sound: Sound) => {
        return {
          name: "McPlaySe",
          args: [arg(sound, (v, t) => t.markSoundArgs(v))],
        };
      },
      script: (code: string) => {
        return { name: "McScript", args: [code] };
      },
      //
      move: (
        dir: keyof typeof DIRECTION_ROUTE8 | keyof typeof DIRECTION_METHOD
      ) => {
        const preset = { ...DIRECTION_ROUTE8, ...DIRECTION_METHOD };
        return { name: `Move${argPreset(dir, preset)}`, args: [] };
      },
      turn: (
        dir:
          | keyof typeof DIRECTION
          | keyof typeof DIRECTION_METHOD
          | keyof typeof DIRECTION_TURN_METHOD
      ) => {
        const preset = {
          ...DIRECTION,
          ...DIRECTION_METHOD,
          ...DIRECTION_TURN_METHOD,
        };
        return { name: `Turn${argPreset(dir, preset)}`, args: [] };
      },
      step: (dir: keyof typeof DIRECTION_CAR) => {
        return { name: `OneStep${argPreset(dir, DIRECTION_CAR)}`, args: [] };
      },
      //
      changeWalkAnimation: (active: boolean) => {
        return { name: `WalkingAnimation${active ? "On" : "Off"}`, args: [] };
      },
      changeStepAnimation: (active: boolean) => {
        return { name: `SteppingAnimation${active ? "On" : "Off"}`, args: [] };
      },
      changeDirectionFix: (active: boolean) => {
        return { name: `DirectionFix${active ? "On" : "Off"}`, args: [] };
      },
      changeNoClip: (active: boolean) => {
        return { name: `Through${active ? "On" : "Off"}`, args: [] };
      },
      changeTransparent: (active: boolean) => {
        return { name: `Transparent${active ? "On" : "Off"}`, args: [] };
      },
    }),
  ]);

export const GetOnOffVehicle: C = () => tag("GetOnOffVehicle");
