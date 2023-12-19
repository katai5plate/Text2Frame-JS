"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForceAction = exports.ShowBattleAnimation = exports.EnemyTransform = exports.EnemyAppear = exports.EnemyRecoverAll = exports.ChangeEnemyState = exports.ChangeEnemyTp = exports.ChangeEnemyMp = exports.ChangeEnemyHp = void 0;
const constants_1 = require("../constants");
const validate_1 = require("../validate");
const ChangeEnemyHp = ({ index, op, value, allowKnockout }) => (0, validate_1.tag)("ChangeEnemyHp", [
    (0, validate_1.argEnemyIndexWithPresetAndVariableId)(index),
    op,
    (0, validate_1.argIntOrVariableId)(value),
    allowKnockout,
]);
exports.ChangeEnemyHp = ChangeEnemyHp;
const commonChange = (name) => {
    const component = ({ index, op, value }) => (0, validate_1.tag)(name, [
        (0, validate_1.argEnemyIndexWithPresetAndVariableId)(index),
        op,
        (0, validate_1.argIntOrVariableId)(value),
    ]);
    return component;
};
exports.ChangeEnemyMp = commonChange("ChangeEnemyMp");
exports.ChangeEnemyTp = commonChange("ChangeEnemyTp");
exports.ChangeEnemyState = commonChange("ChangeEnemyState");
const EnemyRecoverAll = ({ index }) => (0, validate_1.tag)("EnemyRecoverAll", [(0, validate_1.argEnemyIndexWithPresetAndVariableId)(index)]);
exports.EnemyRecoverAll = EnemyRecoverAll;
const EnemyAppear = ({ index }) => (0, validate_1.tag)("EnemyAppear", [(0, validate_1.argEnemyIndexWithPreset)(index)]);
exports.EnemyAppear = EnemyAppear;
const commonIndexAndEnemyId = (name) => {
    const component = ({ index, id }) => (0, validate_1.tag)(name, [(0, validate_1.argEnemyIndex)(index), (0, validate_1.argId)(id)]);
    return component;
};
exports.EnemyTransform = commonIndexAndEnemyId("EnemyTransform");
exports.ShowBattleAnimation = commonIndexAndEnemyId("ShowBattleAnimation");
const ForceAction = ({ mode, index, id, target }) => (0, validate_1.tag)("ForceAction", [
    (0, validate_1.arg)(index, (v, t) => {
        if (mode === "ACTOR")
            return `Actor[${t.validId(v)}]`;
        return (0, validate_1.argEnemyIndex)(v);
    }),
    (0, validate_1.argId)(id),
    (0, validate_1.arg)(target, (v, t) => {
        if (typeof v === "string")
            return t.markPreset(v, constants_1.ACTION_TARGET);
        return `Index ${t.validRange(v, 1, 8)}`;
    }),
]);
exports.ForceAction = ForceAction;
