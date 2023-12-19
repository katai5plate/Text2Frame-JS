"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErasePicture = exports.TintPicture = exports.RotatePicture = exports.MovePicture = exports.ShowPicture = void 0;
const constants_1 = require("../constants");
const validate_1 = require("../validate");
const ShowPicture = ({ id, name, position, scale, blend }) => (0, validate_1.tag)("ShowPicture", [
    (0, validate_1.argRange)(id, { from: 1, to: 100 }),
    name,
    (0, validate_1.joinSkip)(null, [
        position &&
            (0, validate_1.arg)(position, (v, t) => {
                const parse = v.mode === "DIRECT"
                    ? t.validInt
                    : (x) => t.markVariableId({ variableId: x });
                return `Position[${t.markPreset(v.origin, constants_1.PICTURE_ORIGIN)}][${parse(position.x)}][${parse(position.y)}]`;
            }),
        scale &&
            (0, validate_1.arg)(scale, (v, t) => `Scale[${t.validInt(v.width)}][${t.validInt(v.height)}]`),
        blend &&
            (0, validate_1.arg)(blend, (v, t) => `Blend[${t.validRange(v.opacity, 0, 255)}][${t.markPreset(v.mode, constants_1.BLEND_MODE)}]`),
    ]),
]);
exports.ShowPicture = ShowPicture;
const MovePicture = ({ id, position, scale, blend, duration, easing }) => (0, validate_1.tag)("MovePicture", [
    (0, validate_1.argRange)(id, { from: 1, to: 100 }),
    (0, validate_1.joinSkip)(null, [
        position &&
            (0, validate_1.arg)(position, (v, t) => {
                const parse = v.mode === "DIRECT"
                    ? t.validInt
                    : (x) => t.markVariableId({ variableId: x });
                return `Position[${t.markPreset(v.origin, constants_1.PICTURE_ORIGIN)}][${parse(position.x)}][${parse(position.y)}]`;
            }),
        scale &&
            (0, validate_1.arg)(scale, (v, t) => `Scale[${t.validInt(v.width)}][${t.validInt(v.height)}]`),
        blend &&
            (0, validate_1.arg)(blend, (v, t) => `Blend[${t.validRange(v.opacity, 0, 255)}][${t.markPreset(v.mode, constants_1.BLEND_MODE)}]`),
        duration &&
            (0, validate_1.arg)(duration, (v, t) => `Duration[${t.validInt(v.time)}][${v.wait ? "Wait" : ""}]`),
        easing && (0, validate_1.argPreset)(easing, constants_1.EASING),
    ]),
]);
exports.MovePicture = MovePicture;
const RotatePicture = ({ id, speed }) => (0, validate_1.tag)("RotatePicture", [
    (0, validate_1.argRange)(id, { from: 1, to: 100 }),
    (0, validate_1.argRange)(speed, { from: -90, to: 90 }),
]);
exports.RotatePicture = RotatePicture;
const TintPicture = ({ id, color, time }) => (0, validate_1.tag)("TintPicture", [
    (0, validate_1.argRange)(id, { from: 1, to: 100 }),
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
exports.TintPicture = TintPicture;
const ErasePicture = ({ id }) => (0, validate_1.tag)("ErasePicture", [(0, validate_1.argRange)(id, { from: 1, to: 100 })]);
exports.ErasePicture = ErasePicture;
