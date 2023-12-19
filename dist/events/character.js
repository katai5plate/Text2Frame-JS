"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EraseEvent = exports.ShowBalloonIcon = exports.ShowAnimation = exports.GatherFollowers = exports.ChangePlayerFollowers = exports.ChangeTransparency = void 0;
const constants_1 = require("../constants");
const validate_1 = require("../validate");
const commonChange = (name) => {
    const component = ({ active }) => (0, validate_1.tag)(name, [active]);
    return component;
};
exports.ChangeTransparency = commonChange("ChangeTransparency");
exports.ChangePlayerFollowers = commonChange("ChangePlayerFollowers");
const GatherFollowers = () => (0, validate_1.tag)("GatherFollowers");
exports.GatherFollowers = GatherFollowers;
const ShowAnimation = ({ id, animationId, wait }) => (0, validate_1.tag)("ShowAnimation", [
    (0, validate_1.argNumberPreset)(id, constants_1.CHARACTER, true),
    (0, validate_1.argId)(animationId),
    wait,
]);
exports.ShowAnimation = ShowAnimation;
const ShowBalloonIcon = ({ id, balloon, wait }) => (0, validate_1.tag)("ShowBalloonIcon", [
    (0, validate_1.argNumberPreset)(id, constants_1.CHARACTER, true),
    (0, validate_1.argPreset)(balloon, constants_1.BALLOON),
    wait,
]);
exports.ShowBalloonIcon = ShowBalloonIcon;
const EraseEvent = () => (0, validate_1.tag)("EraseEvent");
exports.EraseEvent = EraseEvent;
