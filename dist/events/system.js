"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeVehicleImage = exports.ChangeActorImages = exports.ChangeWindowColor = exports.ChangeFormationAccess = exports.ChangeEncounter = exports.ChangeMenuAccess = exports.ChangeSaveAccess = exports.ChangeVehicleBgm = void 0;
const constants_1 = require("../constants");
const validate_1 = require("../validate");
const ChangeVehicleBgm = ({ vehicle, sound }) => (0, validate_1.tag)("ChangeVehicleBgm", [
    (0, validate_1.argPreset)(vehicle, constants_1.VEHICLE),
    (0, validate_1.arg)(sound, (v, t) => t.markSoundArgs(v)),
]);
exports.ChangeVehicleBgm = ChangeVehicleBgm;
const commonChange = (name) => {
    const component = ({ allow }) => (0, validate_1.tag)(name, [allow]);
    return component;
};
exports.ChangeSaveAccess = commonChange("ChangeSaveAccess");
exports.ChangeMenuAccess = commonChange("ChangeMenuAccess");
exports.ChangeEncounter = commonChange("ChangeEncounter");
exports.ChangeFormationAccess = commonChange("ChangeFormationAccess");
const ChangeWindowColor = ({ color }) => (0, validate_1.tag)("ChangeWindowColor", [(0, validate_1.arg)(color, (v, t) => t.markColorArgs(v))]);
exports.ChangeWindowColor = ChangeWindowColor;
const ChangeActorImages = ({ id, face, character, battler }) => (0, validate_1.tag)("ChangeActorImages", [
    (0, validate_1.argId)(id),
    face.name,
    (0, validate_1.argRange)(face.index, { from: 0, to: 15 }),
    character.name,
    (0, validate_1.argRange)(character.index, { from: 0, to: 7 }),
    battler,
]);
exports.ChangeActorImages = ChangeActorImages;
const ChangeVehicleImage = ({ vehicle, image }) => (0, validate_1.tag)("ChangeActorImages", [
    (0, validate_1.argPreset)(vehicle, constants_1.VEHICLE),
    image.name,
    (0, validate_1.argRange)(image.index, { from: 0, to: 7 }),
]);
exports.ChangeVehicleImage = ChangeVehicleImage;
