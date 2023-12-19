"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOnOffVehicle = exports.SetMovementRoute = exports.ScrollMap = exports.SetEventLocation = exports.SetVehicleLocation = exports.TransferPlayer = void 0;
const constants_1 = require("../constants");
const validate_1 = require("../validate");
const TransferPlayer = ({ mode, position, direction, fade }) => (0, validate_1.tag)("TransferPlayer", [
    (0, validate_1.arg)(position, (v, t) => t.markMapPosition(v, mode)),
    (0, validate_1.arg)(direction, (v, t) => t.markPreset(v, constants_1.DIRECTION_RETAIN)),
    (0, validate_1.arg)(fade, (v, t) => t.markPreset(v, constants_1.FADE)),
]);
exports.TransferPlayer = TransferPlayer;
const SetVehicleLocation = ({ mode, vehicle, position }) => (0, validate_1.tag)("SetVehicleLocation", [
    (0, validate_1.arg)(vehicle, (v, t) => t.markPreset(v, constants_1.VEHICLE)),
    (0, validate_1.arg)(position, (v, t) => t.markMapPosition(v, mode)),
]);
exports.SetVehicleLocation = SetVehicleLocation;
const SetEventLocation = ({ mode, id, position, direction }) => (0, validate_1.tag)("SetEventLocation", [
    (0, validate_1.arg)(id, (v, t) => typeof v === "number" ? t.validId(v) : t.markPreset(v, constants_1.EVENT)),
    mode === "EXCHANGE"
        ? (0, validate_1.arg)(position, (v, t) => {
            const exchange = (x) => `Exchange[${x}]`;
            if (typeof v === "string")
                return exchange(t.markPreset(v, constants_1.EVENT));
            if (typeof v === "number")
                return exchange(t.validId(v));
            throw new Error("不正なマップ位置指定です");
        })
        : (0, validate_1.arg)(position, (v, t) => {
            if (t.isMapPosition(v))
                return t.markMapPosition(v, mode);
            throw new Error("不正なマップ位置指定です");
        }),
    (0, validate_1.arg)(direction, (v, t) => t.markPreset(v, constants_1.DIRECTION_RETAIN)),
]);
exports.SetEventLocation = SetEventLocation;
const ScrollMap = ({ direction, step, speed, wait }) => (0, validate_1.tag)("SetVehicleLocation", [
    (0, validate_1.arg)(direction, (v, t) => t.markPreset(v, constants_1.DIRECTION)),
    (0, validate_1.argInt)(step),
    (0, validate_1.arg)(speed, (v, t) => t.markPreset(v, constants_1.CHARACTER_SPEED)),
    wait,
]);
exports.ScrollMap = ScrollMap;
const SetMovementRoute = ({ id, repeat, skip, wait, routes }) => (0, validate_1.joinSkip)("\n", [
    (0, validate_1.tag)("SetMovementRoute", [
        (0, validate_1.arg)(id, (v, t) => typeof v === "number" ? t.validId(v) : t.markPreset(v, constants_1.CHARACTER)),
        repeat,
        skip,
        wait,
    ]),
    ...routes({
        jump: (x, y) => {
            return { name: "Jump", args: [(0, validate_1.argInt)(x), (0, validate_1.argInt)(y)] };
        },
        wait: (v) => {
            return { name: "McWait", args: [(0, validate_1.argInt)(v)] };
        },
        changeSwitch: (id, to) => {
            return { name: `Switch${to ? "On" : "Off"}`, args: [(0, validate_1.argId)(id)] };
        },
        changeSpeed: (speed) => {
            return {
                name: "ChangeSpeed",
                args: [(0, validate_1.argPreset)(speed, constants_1.CHARACTER_SPEED)],
            };
        },
        changeFreq: (freq) => {
            return {
                name: "ChangeFrequency",
                args: [(0, validate_1.argPreset)(freq, constants_1.CHARACTER_FREQ)],
            };
        },
        changeImage: (name, index) => {
            return {
                name: "ChangeImage",
                args: [name, (0, validate_1.argRange)(index, { from: 0, to: 7 })],
            };
        },
        changeOpacity: (v) => {
            return {
                name: "ChangeOpacity",
                args: [(0, validate_1.argRange)(v, { from: 0, to: 255 })],
            };
        },
        changeBlendMode: (v) => {
            return { name: "ChangeBlendMode", args: [(0, validate_1.argPreset)(v, constants_1.BLEND_MODE)] };
        },
        playSe: (sound) => {
            return {
                name: "McPlaySe",
                args: [(0, validate_1.arg)(sound, (v, t) => t.markSoundArgs(v))],
            };
        },
        script: (code) => {
            return { name: "McScript", args: [code] };
        },
        //
        move: (dir) => {
            const preset = { ...constants_1.DIRECTION_ROUTE8, ...constants_1.DIRECTION_METHOD };
            return { name: `Move${(0, validate_1.argPreset)(dir, preset)}`, args: [] };
        },
        turn: (dir) => {
            const preset = {
                ...constants_1.DIRECTION,
                ...constants_1.DIRECTION_METHOD,
                ...constants_1.DIRECTION_TURN_METHOD,
            };
            return { name: `Turn${(0, validate_1.argPreset)(dir, preset)}`, args: [] };
        },
        step: (dir) => {
            return { name: `OneStep${(0, validate_1.argPreset)(dir, constants_1.DIRECTION_CAR)}`, args: [] };
        },
        //
        changeWalkAnimation: (active) => {
            return { name: `WalkingAnimation${active ? "On" : "Off"}`, args: [] };
        },
        changeStepAnimation: (active) => {
            return { name: `SteppingAnimation${active ? "On" : "Off"}`, args: [] };
        },
        changeDirectionFix: (active) => {
            return { name: `DirectionFix${active ? "On" : "Off"}`, args: [] };
        },
        changeNoClip: (active) => {
            return { name: `Through${active ? "On" : "Off"}`, args: [] };
        },
        changeTransparent: (active) => {
            return { name: `Transparent${active ? "On" : "Off"}`, args: [] };
        },
    }),
]);
exports.SetMovementRoute = SetMovementRoute;
const GetOnOffVehicle = () => (0, validate_1.tag)("GetOnOffVehicle");
exports.GetOnOffVehicle = GetOnOffVehicle;
