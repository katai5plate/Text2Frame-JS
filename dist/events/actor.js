"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeProfile = exports.ChangeNickname = exports.ChangeClass = exports.ChangeName = exports.ChangeEquipment = exports.ChangeParameter = exports.ChangeLevel = exports.ChangeExp = exports.RecoverAll = exports.ChangeSkill = exports.ChangeState = exports.ChangeTp = exports.ChangeMp = exports.ChangeHp = void 0;
const constants_1 = require("../constants");
const validate_1 = require("../validate");
const ChangeHp = ({ id, op, value, allowKnockout }) => (0, validate_1.tag)("ChangeHp", [
    (0, validate_1.argActorIdWithPreset)(id),
    op,
    (0, validate_1.argIntOrVariableId)(value),
    allowKnockout,
]);
exports.ChangeHp = ChangeHp;
const commonChange = (name) => {
    const component = ({ id, op, value }) => (0, validate_1.tag)(name, [(0, validate_1.argActorIdWithPreset)(id), op, (0, validate_1.argIntOrVariableId)(value)]);
    return component;
};
exports.ChangeMp = commonChange("ChangeMp");
exports.ChangeTp = commonChange("ChangeTp");
exports.ChangeState = commonChange("ChangeState");
exports.ChangeSkill = commonChange("ChangeSkill");
const RecoverAll = ({ id }) => (0, validate_1.tag)("RecoverAll", [(0, validate_1.argActorIdWithPreset)(id)]);
exports.RecoverAll = RecoverAll;
const commonLevelUp = (name) => {
    const component = ({ id, op, value, allowLevelUp }) => (0, validate_1.tag)(name, [
        (0, validate_1.argActorIdWithPreset)(id),
        op,
        (0, validate_1.argIntOrVariableId)(value),
        allowLevelUp,
    ]);
    return component;
};
exports.ChangeExp = commonLevelUp("ChangeExp");
exports.ChangeLevel = commonLevelUp("ChangeLevel");
const ChangeParameter = ({ id, parameter, op, value }) => (0, validate_1.tag)("ChangeParameter", [
    (0, validate_1.argActorIdWithPreset)(id),
    (0, validate_1.arg)(parameter, (v, t) => t.markPreset(v, constants_1.ACTER_PARAMETER)),
    op,
    (0, validate_1.argIntOrVariableId)(value),
]);
exports.ChangeParameter = ChangeParameter;
const ChangeEquipment = ({ id, equipType, equipId }) => (0, validate_1.tag)("ChangeEquipment", [
    (0, validate_1.argId)(id),
    (0, validate_1.argId)(equipType),
    equipId && (0, validate_1.argId)(equipId),
]);
exports.ChangeEquipment = ChangeEquipment;
const ChangeName = ({ id, name }) => (0, validate_1.tag)("ChangeName", [(0, validate_1.argId)(id), name]);
exports.ChangeName = ChangeName;
const ChangeClass = ({ id, classId, saveLevelAndExp }) => (0, validate_1.tag)("ChangeClass", [(0, validate_1.argId)(id), (0, validate_1.argId)(classId), saveLevelAndExp]);
exports.ChangeClass = ChangeClass;
const ChangeNickname = ({ id, name }) => (0, validate_1.tag)("ChangeNickname", [(0, validate_1.argId)(id), name]);
exports.ChangeNickname = ChangeNickname;
const ChangeProfile = ({ id, profile: [l1, l2] }) => (0, validate_1.tag)("ChangeProfile", [(0, validate_1.argId)(id), l1, l2]);
exports.ChangeProfile = ChangeProfile;
