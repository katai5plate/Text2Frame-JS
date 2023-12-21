"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangePartyMember = exports.ChangeArmors = exports.ChangeWeapons = exports.ChangeItems = exports.ChangeGold = void 0;
const validate_1 = require("../validate");
const ChangeGold = (op, value) => (0, validate_1.tag)("ChangeGold", [op, (0, validate_1.argIntOrVariableId)(value)]);
exports.ChangeGold = ChangeGold;
const ChangeItems = (id, op, value) => (0, validate_1.tag)("ChangeItems", [(0, validate_1.argId)(id), op, (0, validate_1.argIntOrVariableId)(value)]);
exports.ChangeItems = ChangeItems;
const commonChange = (name) => {
    const component = (id, op, value, includeEquipment) => (0, validate_1.tag)(name, [(0, validate_1.argId)(id), op, (0, validate_1.argIntOrVariableId)(value), includeEquipment]);
    return component;
};
exports.ChangeWeapons = commonChange("ChangeWeapons");
exports.ChangeArmors = commonChange("ChangeArmors");
const ChangePartyMember = (id, op, value, initialize) => (0, validate_1.tag)("ChangeItems", [(0, validate_1.argId)(id), op, (0, validate_1.argIntOrVariableId)(value), initialize]);
exports.ChangePartyMember = ChangePartyMember;
