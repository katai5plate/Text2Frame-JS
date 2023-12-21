"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErasePicture = exports.TintPicture = exports.RotatePicture = exports.MovePicture = exports.ShowPicture = void 0;
const constants_1 = require("../constants");
const validate_1 = require("../validate");
const argPicturePosition = (position) => {
    const parse = position.mode === "DIRECT"
        ? validate_1.argInt
        : (variableId) => (0, validate_1.argVariableId)({ variableId });
    return `Position[${(0, validate_1.argPreset)(position.origin, constants_1.PICTURE_ORIGIN)}][${parse(position.x)}][${parse(position.y)}]`;
};
const argPictureScale = (size) => `Scale[${(0, validate_1.argInt)(size.width)}][${(0, validate_1.argInt)(size.height)}]`;
const argPictureBlend = (blend) => `Blend[${(0, validate_1.argRange)(blend.opacity, { from: 0, to: 255 })}][${(0, validate_1.argPreset)(blend.mode, constants_1.BLEND_MODE)}]`;
const argPictureDuration = (duration) => `Duration[${(0, validate_1.argInt)(duration.time)}][${duration.wait ? "Wait" : ""}]`;
const ShowPicture = (id, name, { position, scale, blend, }) => (0, validate_1.tag)("ShowPicture", [
    (0, validate_1.argRange)(id, { from: 1, to: 100 }),
    name,
    (0, validate_1.joinSkip)(null, [
        position && argPicturePosition(position),
        scale && argPictureScale(scale),
        blend && argPictureBlend(blend),
    ]),
]);
exports.ShowPicture = ShowPicture;
const MovePicture = (id, { position, scale, blend, duration, easing, }) => (0, validate_1.tag)("MovePicture", [
    (0, validate_1.argRange)(id, { from: 1, to: 100 }),
    (0, validate_1.joinSkip)(null, [
        position && argPicturePosition(position),
        scale && argPictureScale(scale),
        blend && argPictureBlend(blend),
        duration && argPictureDuration(duration),
        easing && (0, validate_1.argPreset)(easing, constants_1.EASING),
    ]),
]);
exports.MovePicture = MovePicture;
const RotatePicture = (id, speed) => (0, validate_1.tag)("RotatePicture", [
    (0, validate_1.argRange)(id, { from: 1, to: 100 }),
    (0, validate_1.argRange)(speed, { from: -90, to: 90 }),
]);
exports.RotatePicture = RotatePicture;
const TintPicture = (id, color, time) => (0, validate_1.tag)("TintPicture", [
    (0, validate_1.argRange)(id, { from: 1, to: 100 }),
    (0, validate_1.joinSkip)(null, [color && (0, validate_1.argColorTone)(color), time]),
]);
exports.TintPicture = TintPicture;
const ErasePicture = (id) => (0, validate_1.tag)("ErasePicture", [(0, validate_1.argRange)(id, { from: 1, to: 100 })]);
exports.ErasePicture = ErasePicture;
