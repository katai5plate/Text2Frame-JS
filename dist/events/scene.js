"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnToTitleScreen = exports.GameOver = exports.OpenSaveScreen = exports.OpenMenuScreen = exports.NameInputProcessing = exports.ShopProcessing = exports.BattleProcessing = void 0;
const constants_1 = require("../constants");
const validate_1 = require("../validate");
const BattleProcessing = (id, { ifWin, ifEscape, ifLose, }) => {
    return (0, validate_1.joinSkip)("\n", [
        (0, validate_1.tag)("BattleProcessing", [
            (0, validate_1.typeCase)(id, {
                string: (x) => (0, validate_1.argPreset)(x, constants_1.BATTLE_TROOP),
                variableId: validate_1.argVariableId,
                number: validate_1.argId,
            }),
        ]),
        ifWin ? (0, validate_1.joinSkip)("\n", [(0, validate_1.tag)("IfWin"), ifWin]) : undefined,
        ifEscape ? (0, validate_1.joinSkip)("\n", [(0, validate_1.tag)("IfEscape"), ifEscape]) : undefined,
        ifLose ? (0, validate_1.joinSkip)("\n", [(0, validate_1.tag)("IfLose"), ifLose]) : undefined,
        (0, validate_1.tag)("End"),
    ]);
};
exports.BattleProcessing = BattleProcessing;
const ShopProcessing = (items, purchaseOnly) => (0, validate_1.joinSkip)("\n", [
    (0, validate_1.tag)("ShopProcessing", [purchaseOnly]),
    ...items.map(({ type, id, price }) => (0, validate_1.tag)("Merchandise", [(0, validate_1.argPreset)(type, constants_1.SHOP_ITEM), (0, validate_1.argId)(id), (0, validate_1.argInt)(price)])),
]);
exports.ShopProcessing = ShopProcessing;
const NameInputProcessing = (id, length) => (0, validate_1.tag)("NameInputProcessing", [(0, validate_1.argId)(id), (0, validate_1.argRange)(length, { from: 1, to: 8 })]);
exports.NameInputProcessing = NameInputProcessing;
const OpenMenuScreen = () => (0, validate_1.tag)("OpenMenuScreen");
exports.OpenMenuScreen = OpenMenuScreen;
const OpenSaveScreen = () => (0, validate_1.tag)("OpenSaveScreen");
exports.OpenSaveScreen = OpenSaveScreen;
const GameOver = () => (0, validate_1.tag)("GameOver");
exports.GameOver = GameOver;
const ReturnToTitleScreen = () => (0, validate_1.tag)("ReturnToTitleScreen");
exports.ReturnToTitleScreen = ReturnToTitleScreen;
