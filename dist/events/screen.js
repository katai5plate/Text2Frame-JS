"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetWeatherEffect = exports.ShakeScreen = exports.FlashScreen = exports.TintScreen = exports.FadeIn = exports.FadeOut = void 0;
const constants_1 = require("../constants");
const validate_1 = require("../validate");
const FadeOut = () => (0, validate_1.tag)("FadeOut");
exports.FadeOut = FadeOut;
const FadeIn = () => (0, validate_1.tag)("FadeIn");
exports.FadeIn = FadeIn;
const TintScreen = ({ color, time }) => (0, validate_1.tag)("TintScreen", [
    (0, validate_1.joinSkip)(null, [
        color &&
            (0, validate_1.arg)(color, (v, t) => {
                if (typeof v === "string")
                    return t.markPreset(v, constants_1.COLOR_TONE);
                return t.markColorTone(v);
            }),
        time,
    ]),
]);
exports.TintScreen = TintScreen;
const FlashScreen = ({ color, time, wait }) => (0, validate_1.tag)("FlashScreen", [(0, validate_1.arg)(color, (v, t) => t.markColorArgs(v)), time, wait]);
exports.FlashScreen = FlashScreen;
const ShakeScreen = ({ velocity, speed, time, wait }) => (0, validate_1.tag)("ShakeScreen", [(0, validate_1.argInt)(velocity), (0, validate_1.argInt)(speed), (0, validate_1.argInt)(time), wait]);
exports.ShakeScreen = ShakeScreen;
const SetWeatherEffect = ({ weather, velocity, time, wait }) => (0, validate_1.tag)("SetWeatherEffect", [
    (0, validate_1.argPreset)(weather, constants_1.WEATHER),
    (0, validate_1.argInt)(velocity),
    (0, validate_1.argInt)(time),
    wait,
]);
exports.SetWeatherEffect = SetWeatherEffect;
