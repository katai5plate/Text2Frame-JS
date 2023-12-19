"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.argEnemyIndexWithPresetAndVariableId = exports.argEnemyIndexWithPreset = exports.argActorIdWithPreset = exports.argIntOrVariableId = exports.argCharacterIdWithPreset = exports.createPresetArgWithVariableId = exports.createPresetArg = exports.argRange = exports.argNumberPreset = exports.argPreset = exports.argEnemyIndex = exports.argId = exports.argInt = exports.tag = exports.joinSkip = exports.joinKeep = exports.arg = void 0;
const constants_1 = require("./constants");
const arg = (value, converter) => {
    const validInt = (v) => {
        if (v % 1 !== 0) {
            throw new Error(`値は整数である必要があります。`);
        }
        return v;
    };
    const range = (v, min, max) => {
        if (!(min <= v && v <= max)) {
            throw new Error(`値は ${min} ～ ${max} の間の値である必要があります。`);
        }
        return v;
    };
    const validOne = (v) => range(validInt(v), 1, Infinity);
    return `${converter(value, {
        markVariableId: (v) => `V[${v.variableId}]`,
        markSwitchId: (v) => `SW[${v.switchId}]`,
        markFromTo: (v) => `${v.from}-${v.to}`,
        markPreset: (v, p) => p[v],
        markMapPosition: (v, mode) => `${mode === "DIRECT" ? "Direct" : "WithVariables"}[${v.id}][${v.x}][${v.y}]`,
        markSoundArgs: (v) => (0, exports.joinKeep)(null, [v.name ?? "None", v.volume, v.pitch, v.pan]),
        markColorTone: (v) => `ColorTone[${v.r}][${v.g}][${v.b}]${v?.x ? `[${v.x}]` : ""}`,
        markColorArgs: (v) => (0, exports.joinSkip)(null, [v.r, v.g, v.b, v?.x]),
        //
        validInt,
        validRange: (v, min, max) => range(validInt(v), min, max),
        validOne,
        validId: validOne,
        //
        isVariableId: (v) => {
            if (typeof v === "number")
                return false;
            return !!v?.variableId;
        },
        isSwitchId: (v) => {
            if (typeof v === "number")
                return false;
            return !!v?.switchId;
        },
        isFromTo: (v) => {
            if (typeof v === "number")
                return false;
            return !!v?.from && !!v?.to;
        },
        isMapPosition: (v) => {
            if (typeof v === "number")
                return false;
            return (!!v?.id &&
                !!v?.x &&
                !!v?.y);
        },
        isSound: (v) => {
            if (typeof v === "number")
                return false;
            return (!!v?.name &&
                !!v?.volume &&
                !!v?.pitch &&
                !!v?.pan);
        },
        isColor: (v) => {
            if (typeof v === "number")
                return false;
            return (!!v?.r &&
                !!v?.g &&
                !!v?.b);
        },
    })}`;
};
exports.arg = arg;
const joinKeep = (delim, arr) => arr.join(delim ?? ", ");
exports.joinKeep = joinKeep;
const joinSkip = (delim, arr) => arr.filter((x) => x !== undefined).join(delim ?? ", ");
exports.joinSkip = joinSkip;
const tag = (name, arg, textChildren) => {
    const args = (0, exports.joinKeep)(null, arg ?? []);
    return (0, exports.joinSkip)("\n", [
        args !== "" ? `<${name}: ${args}>` : `<${name}>`,
        ...(textChildren
            ? [
                ...(Array.isArray(textChildren) ? textChildren : [textChildren]),
                `</${name}>`,
            ]
            : []),
    ]);
};
exports.tag = tag;
const argInt = (v) => (0, exports.arg)(v, (v, t) => t.validInt(v));
exports.argInt = argInt;
const argId = (v) => (0, exports.arg)(v, (v, t) => t.validOne(v));
exports.argId = argId;
const argEnemyIndex = (v) => (0, exports.arg)(v, (v, t) => t.validRange(v, 1, 8));
exports.argEnemyIndex = argEnemyIndex;
const argPreset = (v, preset) => (0, exports.arg)(v, (v, t) => t.markPreset(v, preset));
exports.argPreset = argPreset;
const argNumberPreset = (v, preset, isId) => (0, exports.arg)(v, (v, t) => typeof v === "number"
    ? isId
        ? t.validId(v)
        : t.validInt(v)
    : t.markPreset(v, preset));
exports.argNumberPreset = argNumberPreset;
const argRange = (v, range) => (0, exports.arg)(v, (v, t) => t.validRange(v, range.from, range.to));
exports.argRange = argRange;
const createPresetArg = (preset) => {
    return (v) => (0, exports.arg)(v, (v, t) => typeof v === "number" ? t.validId(v) : t.markPreset(v, preset));
};
exports.createPresetArg = createPresetArg;
const createPresetArgWithVariableId = (preset, range) => (v) => (0, exports.arg)(v, (v, t) => {
    if (typeof v === "string")
        return t.markPreset(v, preset);
    if (t.isVariableId(v))
        return t.markVariableId(v);
    if (typeof v === "number") {
        if (range)
            t.validRange(v, range.from, range.to);
        return t.validId(v);
    }
    throw new Error("対応していない型が指定されました");
});
exports.createPresetArgWithVariableId = createPresetArgWithVariableId;
exports.argCharacterIdWithPreset = (0, exports.createPresetArg)(constants_1.CHARACTER);
const argIntOrVariableId = (v) => (0, exports.arg)(v, (v, t) => (t.isVariableId(v) ? t.markVariableId(v) : v));
exports.argIntOrVariableId = argIntOrVariableId;
exports.argActorIdWithPreset = (0, exports.createPresetArgWithVariableId)(constants_1.ACTOR_MEMBER);
exports.argEnemyIndexWithPreset = (0, exports.createPresetArgWithVariableId)(constants_1.ENEMY_MEMBER);
exports.argEnemyIndexWithPresetAndVariableId = (0, exports.createPresetArgWithVariableId)(constants_1.ENEMY_MEMBER, { from: 1, to: 8 });
