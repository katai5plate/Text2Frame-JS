"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollingText = exports.SelectItem = exports.InputNumber = exports.Choices = exports.Window = exports.M = exports.Message = void 0;
const constants_1 = require("../constants");
const validate_1 = require("../validate");
const Message = ({ children }) => Array.isArray(children) ? children.join("\n") : children;
exports.Message = Message;
exports.M = exports.Message;
const Window = ({ face, position, background, name }) => (0, validate_1.joinSkip)("\n", [
    background && (0, validate_1.tag)("Background", [background]),
    position && (0, validate_1.tag)("WindowPosition", [position]),
    face &&
        (0, validate_1.tag)("Face", [
            `${face.name}(${(0, validate_1.arg)(face.index, (v, t) => t.validRange(v, 0, 15))})`,
        ]),
    name && (0, validate_1.tag)("Name", [name]),
]);
exports.Window = Window;
const ChoicesWhen = ({ name, children }) => (0, validate_1.joinSkip)("\n", [(0, validate_1.tag)("When", [name]), children]);
const ChoicesCancel = ({ children }) => (0, validate_1.joinSkip)("\n", [(0, validate_1.tag)("WhenCancel"), children]);
const ShowChoices = ({ background, position, init, cancel, children }) => (0, validate_1.joinSkip)("\n", [
    (0, validate_1.tag)("ShowChoices", [
        background,
        position,
        init &&
            (0, validate_1.arg)(init, (v, t) => typeof v === "number"
                ? t.validRange(v, 1, 6)
                : t.markPreset(v, constants_1.CHOICES_INIT)),
        cancel &&
            (0, validate_1.arg)(cancel, (v, t) => typeof v === "number"
                ? t.validRange(v, 1, 6)
                : t.markPreset(v, constants_1.CHOICES_CANCEL)),
    ]),
    children,
    (0, validate_1.tag)("End"),
]);
exports.Choices = {
    Show: ShowChoices,
    When: ChoicesWhen,
    Cancel: ChoicesCancel,
};
const InputNumber = ({ id, digit }) => (0, validate_1.tag)("InputNumber", [
    (0, validate_1.arg)(id, (v, t) => t.markVariableId(v)),
    (0, validate_1.arg)(digit, (v, t) => t.validRange(digit, 1, 8)),
]);
exports.InputNumber = InputNumber;
const SelectItem = ({ id, itemType }) => (0, validate_1.tag)("SelectItem", [
    (0, validate_1.arg)(id, (v, t) => t.markVariableId(v)),
    (0, validate_1.arg)(itemType, (v, t) => t.markPreset(v, constants_1.ITEM_TYPE)),
]);
exports.SelectItem = SelectItem;
const ScrollingText = ({ speed = 2, noSkip, text }) => (0, validate_1.tag)("ScrollingText", [speed, noSkip], text);
exports.ScrollingText = ScrollingText;
