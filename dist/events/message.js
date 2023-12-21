"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollingText = exports.SelectItem = exports.InputNumber = exports.ShowChoices = exports.Window = void 0;
const constants_1 = require("../constants");
const validate_1 = require("../validate");
const argChoices = (value, preset) => typeof value === "number"
    ? (0, validate_1.argRange)(value, { from: 1, to: 6 })
    : (0, validate_1.argPreset)(value, preset);
const Window = ({ face, position, background, name, }) => (0, validate_1.joinSkip)("\n", [
    background && (0, validate_1.tag)("Background", [background]),
    position && (0, validate_1.tag)("WindowPosition", [position]),
    face &&
        (0, validate_1.tag)("Face", [
            `${face.name}(${(0, validate_1.argRange)(face.index, { from: 0, to: 15 })})`,
        ]),
    name && (0, validate_1.tag)("Name", [name]),
]);
exports.Window = Window;
const ShowChoices = (cases, { background, position, init, cancel, }) => {
    if (cases.filter((caseItem) => caseItem.name === null).length >= 2)
        throw new Error("キャンセル扱いとなる name=null は複数設定できません");
    return (0, validate_1.joinSkip)("\n", [
        (0, validate_1.tag)("ShowChoices", [
            background && (0, validate_1.argPreset)(background, constants_1.WINDOW_BACKGROUND),
            position && (0, validate_1.argPreset)(position, constants_1.WINDOW_POSITION_HORIZONTAL),
            init && argChoices(init, constants_1.CHOICES_INIT),
            cancel && argChoices(cancel, constants_1.CHOICES_CANCEL),
        ]),
        (0, validate_1.joinSkip)("\n", cases.map(({ name, then }) => (0, validate_1.joinSkip)("\n", [
            (0, validate_1.joinSkip)("\n", [
                name ? (0, validate_1.tag)("When", [name]) : (0, validate_1.tag)("WhenCancel"),
                (0, validate_1.joinSkip)("\n", [then]),
            ]),
        ]))),
        (0, validate_1.tag)("End"),
    ]);
};
exports.ShowChoices = ShowChoices;
const InputNumber = (id, digit) => (0, validate_1.tag)("InputNumber", [(0, validate_1.argVariableId)(id), (0, validate_1.argRange)(digit, { from: 1, to: 8 })]);
exports.InputNumber = InputNumber;
const SelectItem = (id, itemType) => (0, validate_1.tag)("SelectItem", [(0, validate_1.argVariableId)(id), (0, validate_1.argPreset)(itemType, constants_1.ITEM_TYPE)]);
exports.SelectItem = SelectItem;
const ScrollingText = (text, { speed = 2, noSkip }) => (0, validate_1.tag)("ScrollingText", [speed, noSkip], text);
exports.ScrollingText = ScrollingText;
