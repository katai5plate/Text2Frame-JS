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
import { MapPosition, DirectOrVariables, Sound, SwitchId } from "../type";
import {
  argId,
  argInt,
  argMapPosition,
  argPreset,
  argRange,
  argSwitchId,
  argsSound,
  joinSkip,
  tag,
  typeCase,
} from "../validate";

const argIdOrPreset = <P extends Record<string, string>>(
  value: keyof P | number,
  preset: P
) =>
  typeof value === "number" ? argId(value) : argPreset(value as string, preset);

export const TransferPlayer = (
  mode: DirectOrVariables,
  position: MapPosition,
  direction: keyof typeof DIRECTION_RETAIN,
  fade: keyof typeof FADE
) =>
  tag("TransferPlayer", [
    argMapPosition(position, mode),
    argPreset(direction, DIRECTION_RETAIN),
    argPreset(fade, FADE),
  ]);

export const SetVehicleLocation = (
  mode: DirectOrVariables,
  vehicle: keyof typeof VEHICLE,
  position: MapPosition
) =>
  tag("SetVehicleLocation", [
    argPreset(vehicle, VEHICLE),
    argMapPosition(position, mode),
  ]);

export const SetEventLocation = (
  mode: DirectOrVariables | "EXCHANGE",
  id: keyof typeof EVENT | number,
  position: MapPosition | keyof typeof EVENT | number,
  direction: keyof typeof DIRECTION_RETAIN
) =>
  tag("SetEventLocation", [
    argIdOrPreset(id, EVENT),
    mode === "EXCHANGE"
      ? typeCase(position, {
          string: (x) => `Exchange[${argPreset(x, EVENT)}]`,
          number: (x) => `Exchange[${argId(x)}]`,
        })
      : typeCase(position, {
          mapPosition: (x) => argMapPosition(x, mode),
        }),
    argPreset(direction, DIRECTION_RETAIN),
  ]);

export const ScrollMap = (
  direction: keyof typeof DIRECTION,
  step: number,
  speed: keyof typeof CHARACTER_SPEED,
  wait?: boolean
) =>
  tag("SetVehicleLocation", [
    argPreset(direction, DIRECTION),
    argInt(step),
    argPreset(speed, CHARACTER_SPEED),
    wait,
  ]);

type RouteCode = { name: string; args: (number | string)[] };
interface Route {
  jump: (x: number, y: number) => RouteCode;
  wait: (v: number) => RouteCode;
  changeSwitch: (id: SwitchId, to: boolean) => RouteCode;
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
export const SetMovementRoute = (
  id: keyof typeof CHARACTER | number,
  routes: (route: Route) => RouteCode[],
  { repeat = false, skip = false, wait = true } = {}
) =>
  joinSkip("\n", [
    tag("SetMovementRoute", [argIdOrPreset(id, CHARACTER), repeat, skip, wait]),
    ...routes({
      jump: (x: number, y: number) => {
        return { name: "Jump", args: [argInt(x), argInt(y)] };
      },
      wait: (v: number) => {
        return { name: "McWait", args: [argInt(v)] };
      },
      changeSwitch: (id: SwitchId, to: boolean) => {
        return {
          name: `Switch${to ? "On" : "Off"}`,
          args: [argSwitchId(id)],
        };
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
          args: [argsSound(sound)],
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
    }).map(({ name, args }) => tag(name, args)),
  ]);

export const GetOnOffVehicle = () => tag("GetOnOffVehicle");
