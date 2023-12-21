import { BLEND_MODE, CHARACTER, CHARACTER_FREQ, CHARACTER_SPEED, DIRECTION, DIRECTION_CAR, DIRECTION_METHOD, DIRECTION_RETAIN, DIRECTION_ROUTE8, DIRECTION_TURN_METHOD, EVENT, FADE, VEHICLE } from "../constants";
import { MapPosition, DirectOrVariables, Sound, SwitchId } from "../type";
export declare const TransferPlayer: (mode: DirectOrVariables, position: MapPosition, direction: keyof typeof DIRECTION_RETAIN, fade: keyof typeof FADE) => string;
export declare const SetVehicleLocation: (mode: DirectOrVariables, vehicle: keyof typeof VEHICLE, position: MapPosition) => string;
export declare const SetEventLocation: (mode: DirectOrVariables | "EXCHANGE", id: keyof typeof EVENT | number, position: MapPosition | keyof typeof EVENT | number, direction: keyof typeof DIRECTION_RETAIN) => string;
export declare const ScrollMap: (direction: keyof typeof DIRECTION, step: number, speed: keyof typeof CHARACTER_SPEED, wait?: boolean) => string;
type RouteCode = {
    name: string;
    args: (number | string)[];
};
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
    move: (dir: keyof typeof DIRECTION_ROUTE8 | keyof typeof DIRECTION_METHOD) => RouteCode;
    turn: (dir: keyof typeof DIRECTION | keyof typeof DIRECTION_METHOD | keyof typeof DIRECTION_TURN_METHOD) => RouteCode;
    step: (dir: keyof typeof DIRECTION_CAR) => RouteCode;
    changeWalkAnimation: (active: boolean) => RouteCode;
    changeStepAnimation: (active: boolean) => RouteCode;
    changeDirectionFix: (active: boolean) => RouteCode;
    changeNoClip: (active: boolean) => RouteCode;
    changeTransparent: (active: boolean) => RouteCode;
}
export declare const SetMovementRoute: (id: keyof typeof CHARACTER | number, routes: (route: Route) => RouteCode[], { repeat, skip, wait }?: {
    repeat?: boolean | undefined;
    skip?: boolean | undefined;
    wait?: boolean | undefined;
}) => string;
export declare const GetOnOffVehicle: () => string;
export {};
//# sourceMappingURL=movement.d.ts.map