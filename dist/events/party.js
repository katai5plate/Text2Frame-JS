"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangePartyMember = exports.ChangeArmors = exports.ChangeWeapons = exports.ChangeItems = exports.ChangeGold = void 0;
const validate_1 = require("../validate");
const ChangeGold = ({ op, value }) => (0, validate_1.tag)("ChangeGold", [op, (0, validate_1.argIntOrVariableId)(value)]);
exports.ChangeGold = ChangeGold;
const ChangeItems = ({ id, op, value }) => (0, validate_1.tag)("ChangeItems", [(0, validate_1.argId)(id), op, (0, validate_1.argIntOrVariableId)(value)]);
exports.ChangeItems = ChangeItems;
const ChangeWeapons = ({ id, op, value, includeEquipment }) => (0, validate_1.tag)("ChangeWeapons", [
    (0, validate_1.argId)(id),
    op,
    (0, validate_1.argIntOrVariableId)(value),
    includeEquipment,
]);
exports.ChangeWeapons = ChangeWeapons;
const ChangeArmors = ({ id, op, value, includeEquipment }) => (0, validate_1.tag)("ChangeArmors", [
    (0, validate_1.argId)(id),
    op,
    (0, validate_1.argIntOrVariableId)(value),
    includeEquipment,
]);
exports.ChangeArmors = ChangeArmors;
const ChangePartyMember = ({ id, op, value, initialize }) => (0, validate_1.tag)("ChangeItems", [(0, validate_1.argId)(id), op, (0, validate_1.argIntOrVariableId)(value), initialize]);
exports.ChangePartyMember = ChangePartyMember;
