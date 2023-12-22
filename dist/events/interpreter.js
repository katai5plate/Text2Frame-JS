"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginCommandMZ = exports.PluginCommandMV = exports.Script = exports.Wait = void 0;
const validate_1 = require("../validate");
const Wait = (time) => (0, validate_1.tag)("Wait", [(0, validate_1.argInt)(time)]);
exports.Wait = Wait;
const Script = (code) => {
    const match = code.toString().match(/\{([\s\S]*)\}/);
    return (0, validate_1.tag)("Script", undefined, match ? match[1].trim() : "");
};
exports.Script = Script;
const PluginCommandMV = (command) => (0, validate_1.tag)("PluginCommand", [command]);
exports.PluginCommandMV = PluginCommandMV;
const PluginCommandMZ = (name, method, command, args) => (0, validate_1.tag)("PluginCommandMZ", [
    name,
    method,
    command,
    ...args.map((x) => `${x.name}[${x.value}]`),
]);
exports.PluginCommandMZ = PluginCommandMZ;
