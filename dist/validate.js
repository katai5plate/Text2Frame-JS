"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPresetArgWithVariableId = exports.createPresetArg = exports.argIntOrVariableId = exports.argColorTone = exports.argMapPosition = exports.argsSound = exports.argsColor = exports.argFromTo = exports.argVariableId = exports.argSwitchId = exports.argPreset = exports.argEnemyIndex = exports.argId = exports.argRange = exports.argInt = exports.typeCase = exports.tag = exports.joinSkip = exports.joinKeep = void 0;
const constants_1 = require("./constants");
const joinKeep = (delim, arr) => arr.join(delim ?? ", ");
exports.joinKeep = joinKeep;
const joinSkip = (delim, arr) => arr.filter((x) => x !== undefined).join(delim ?? ", ");
exports.joinSkip = joinSkip;
const tag = (name, arg, textChildren) => {
    const args = (0, exports.joinKeep)(null, arg ?? []);
    return (0, exports.joinSkip)("\n", [
        args !== "" ? `<${name}: ${args}>` : `<${name}>`,
        ...(textChildren ? [textChildren, `</${name}>`] : []),
    ]);
};
exports.tag = tag;
const typeCase = (v, cases) => {
    const e = () => new Error("サポートされていない型です");
    if (typeof v === "number" && cases.number)
        return cases.number(v, e);
    if (typeof v === "string" && cases.string)
        return cases.string(v, e);
    if (typeof v === "object") {
        if (cases.object)
            return cases.object(v, e);
        if ("variableId" in v && cases.variableId)
            return cases.variableId(v, e);
        if ("switchId" in v && cases.switchId)
            return cases.switchId(v, e);
        if ("from" in v && "to" in v && cases.fromTo)
            return cases.fromTo(v, e);
        if ("id" in v && "x" in v && "y" in v && cases.mapPosition)
            return cases.mapPosition(v, e);
        if ("name" in v &&
            "volume" in v &&
            "pitch" in v &&
            "pan" in v &&
            cases.sound)
            return cases.sound(v, e);
        if ("r" in v && "g" in v && "b" in v && cases.color)
            return cases.color(v, e);
    }
    throw e();
};
exports.typeCase = typeCase;
const argInt = (v) => {
    if (v % 1 !== 0) {
        throw new Error(`値は整数である必要があります。`);
    }
    return v;
};
exports.argInt = argInt;
const argRange = (v, range) => {
    (0, exports.argInt)(v);
    if (!(range.from <= v && v <= range.to)) {
        throw new Error(`値は ${range.from} ～ ${range.to} の間の値である必要があります。`);
    }
    return v;
};
exports.argRange = argRange;
const argId = (v) => (0, exports.argRange)(v, { from: 1, to: Infinity });
exports.argId = argId;
const argEnemyIndex = (v) => (0, exports.argRange)(v, { from: 1, to: 8 });
exports.argEnemyIndex = argEnemyIndex;
const argPreset = (v, preset) => preset[v];
exports.argPreset = argPreset;
const argSwitchId = (value) => `SW[${value.switchId}]`;
exports.argSwitchId = argSwitchId;
const argVariableId = (value) => `V[${value.variableId}]`;
exports.argVariableId = argVariableId;
const argFromTo = (value) => `${value.from}-${value.to}`;
exports.argFromTo = argFromTo;
const argsColor = (color) => `ColorTone[${color.r}][${color.g}][${color.b}]${color?.x ? `[${color.x}]` : ""}`;
exports.argsColor = argsColor;
const argsSound = (sound) => (0, exports.joinKeep)(null, [sound.name ?? "None", sound.volume, sound.pitch, sound.pan]);
exports.argsSound = argsSound;
const argMapPosition = (mapos, mode) => `${mode === "DIRECT" ? "Direct" : "WithVariables"}[${mapos.id}][${mapos.x}][${mapos.y}]`;
exports.argMapPosition = argMapPosition;
const argColorTone = (value) => typeof value === "object"
    ? `ColorTone[${value.r}][${value.g}][${value.b}][${value.x}]`
    : (0, exports.argPreset)(value, constants_1.COLOR_TONE);
exports.argColorTone = argColorTone;
const argIntOrVariableId = (v) => (0, exports.typeCase)(v, {
    variableId: exports.argVariableId,
    number: (x) => x,
});
exports.argIntOrVariableId = argIntOrVariableId;
const createPresetArg = (preset) => {
    return (v) => typeof v === "string" ? (0, exports.argPreset)(v, preset) : (0, exports.argId)(v);
};
exports.createPresetArg = createPresetArg;
const createPresetArgWithVariableId = (preset, range) => (v) => (0, exports.typeCase)(v, {
    string: (x) => (0, exports.argPreset)(x, preset),
    variableId: exports.argVariableId,
    number: (x) => (range ? (0, exports.argRange)(x, range) : (0, exports.argId)(x)),
});
exports.createPresetArgWithVariableId = createPresetArgWithVariableId;
