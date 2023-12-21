"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForceAction = exports.ShowBattleAnimation = exports.EnemyTransform = exports.EnemyAppear = exports.EnemyRecoverAll = exports.ChangeEnemyState = exports.ChangeEnemyTp = exports.ChangeEnemyMp = exports.ChangeEnemyHp = void 0;
const constants_1 = require("../constants");
const validate_1 = require("../validate");
const argEnemyIndexWithPreset = (0, validate_1.createPresetArgWithVariableId)(constants_1.ENEMY_MEMBER);
const argEnemyIndexWithPresetAndVariableId = (0, validate_1.createPresetArgWithVariableId)(constants_1.ENEMY_MEMBER, { from: 1, to: 8 });
const ChangeEnemyHp = (index, op, value, allowKnockout) => (0, validate_1.tag)("ChangeEnemyHp", [
    argEnemyIndexWithPresetAndVariableId(index),
    op,
    (0, validate_1.argIntOrVariableId)(value),
    allowKnockout,
]);
exports.ChangeEnemyHp = ChangeEnemyHp;
const commonChange = (name) => {
    const component = (index, op, value) => (0, validate_1.tag)(name, [
        argEnemyIndexWithPresetAndVariableId(index),
        op,
        (0, validate_1.argIntOrVariableId)(value),
    ]);
    return component;
};
exports.ChangeEnemyMp = commonChange("ChangeEnemyMp");
exports.ChangeEnemyTp = commonChange("ChangeEnemyTp");
exports.ChangeEnemyState = commonChange("ChangeEnemyState");
const EnemyRecoverAll = (index) => (0, validate_1.tag)("EnemyRecoverAll", [argEnemyIndexWithPresetAndVariableId(index)]);
exports.EnemyRecoverAll = EnemyRecoverAll;
const EnemyAppear = (index) => (0, validate_1.tag)("EnemyAppear", [argEnemyIndexWithPreset(index)]);
exports.EnemyAppear = EnemyAppear;
const commonIndexAndEnemyId = (name) => {
    const component = (index, id) => (0, validate_1.tag)(name, [(0, validate_1.argEnemyIndex)(index), (0, validate_1.argId)(id)]);
    return component;
};
exports.EnemyTransform = commonIndexAndEnemyId("EnemyTransform");
exports.ShowBattleAnimation = commonIndexAndEnemyId("ShowBattleAnimation");
const ForceAction = (mode, index, id, target) => (0, validate_1.tag)("ForceAction", [
    (0, validate_1.typeCase)(index, {
        number: (x) => mode === "ACTOR" ? `Actor[${(0, validate_1.argId)(x)}]` : (0, validate_1.argEnemyIndex)(x),
    }),
    (0, validate_1.argId)(id),
    (0, validate_1.typeCase)(target, {
        string: (x) => (0, validate_1.argPreset)(x, constants_1.ACTION_TARGET),
        number: (x) => `Index ${(0, validate_1.argRange)(x, { from: 1, to: 8 })}`,
    }),
]);
exports.ForceAction = ForceAction;
