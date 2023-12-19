"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = exports.SelfSwitch = exports.Variable = exports.Switch = void 0;
const constants_1 = require("../constants");
const validate_1 = require("../validate");
const Switch = ({ id, toBe }) => (0, validate_1.tag)("Switch", [
    (0, validate_1.arg)(id, (v, t) => (t.isSwitchId(v) ? t.markSwitchId(v) : t.markFromTo(v))),
    toBe,
]);
exports.Switch = Switch;
const Variable = ({ id, calc }) => {
    const list = calc({
        set: (value) => ({
            op: "SET",
            value: value,
        }),
        add: (value) => ({
            op: "ADD",
            value: value,
        }),
        sub: (value) => ({
            op: "SUB",
            value: value,
        }),
        mul: (value) => ({
            op: "MUL",
            value: value,
        }),
        div: (value) => ({
            op: "DIV",
            value: value,
        }),
        mod: (value) => ({
            op: "MOD",
            value: value,
        }),
    }, {
        variable: (id) => `V[${(0, validate_1.argId)(id)}]`,
        random: ({ from, to }) => `Random[${(0, validate_1.argInt)(from)}][${(0, validate_1.argInt)(to)}]`,
        script: (js) => `Script[${js}]`,
        game: {
            item: {
                itemCount: (id) => `GameData[Item][${(0, validate_1.argId)(id)}]`,
                weaponCount: (id) => `GameData[Weapon][${(0, validate_1.argId)(id)}]`,
                armorCount: (id) => `GameData[Armor][${(0, validate_1.argId)(id)}]`,
            },
            actor: {
                level: (id) => `GameData[Actor][Level][${(0, validate_1.argId)(id)}]`,
                exp: (id) => `GameData[Actor][Exp][${(0, validate_1.argId)(id)}]`,
                HP: (id) => `GameData[Actor][HP][${(0, validate_1.argId)(id)}]`,
                MP: (id) => `GameData[Actor][MP][${(0, validate_1.argId)(id)}]`,
                maxHP: (id) => `GameData[Actor][MaxHp][${(0, validate_1.argId)(id)}]`,
                MaxMP: (id) => `GameData[Actor][MaxMP][${(0, validate_1.argId)(id)}]`,
                attack: (id) => `GameData[Actor][Attack][${(0, validate_1.argId)(id)}]`,
                defense: (id) => `GameData[Actor][Defense][${(0, validate_1.argId)(id)}]`,
                mAttack: (id) => `GameData[Actor][M.Attack][${(0, validate_1.argId)(id)}]`,
                mDefense: (id) => `GameData[Actor][M.Defense][${(0, validate_1.argId)(id)}]`,
                agility: (id) => `GameData[Actor][Agility][${(0, validate_1.argId)(id)}]`,
                luck: (id) => `GameData[Actor][Luck][${(0, validate_1.argId)(id)}]`,
                TP: (id) => `GameData[Actor][TP][${(0, validate_1.argId)(id)}]`,
            },
            enemy: {
                HP: (index) => `GameData[Enemy][HP][${(0, validate_1.argEnemyIndex)(index)}]`,
                MP: (index) => `GameData[Enemy][MP][${(0, validate_1.argEnemyIndex)(index)}]`,
                maxHP: (index) => `GameData[Enemy][MaxHp][${(0, validate_1.argEnemyIndex)(index)}]`,
                MaxMP: (index) => `GameData[Enemy][MaxMP][${(0, validate_1.argEnemyIndex)(index)}]`,
                attack: (index) => `GameData[Enemy][Attack][${(0, validate_1.argEnemyIndex)(index)}]`,
                defense: (index) => `GameData[Enemy][Defense][${(0, validate_1.argEnemyIndex)(index)}]`,
                mAttack: (index) => `GameData[Enemy][M.Attack][${(0, validate_1.argEnemyIndex)(index)}]`,
                mDefense: (index) => `GameData[Enemy][M.Defense][${(0, validate_1.argEnemyIndex)(index)}]`,
                agility: (index) => `GameData[Enemy][Agility][${(0, validate_1.argEnemyIndex)(index)}]`,
                luck: (index) => `GameData[Enemy][Luck][${(0, validate_1.argEnemyIndex)(index)}]`,
                TP: (index) => `GameData[Enemy][TP][${(0, validate_1.argEnemyIndex)(index)}]`,
            },
            character: {
                mapX: (characterId) => `GameData[Character][${(0, validate_1.argCharacterIdWithPreset)(characterId)}][MapX]`,
                mapY: (characterId) => `GameData[Character][${(0, validate_1.argCharacterIdWithPreset)(characterId)}][MapY]`,
                direction: (characterId) => `GameData[Character][${(0, validate_1.argCharacterIdWithPreset)(characterId)}][Direction]`,
                screenX: (characterId) => `GameData[Character][${(0, validate_1.argCharacterIdWithPreset)(characterId)}][ScreenX]`,
                screenY: (characterId) => `GameData[Character][${(0, validate_1.argCharacterIdWithPreset)(characterId)}][ScreenY]`,
            },
            last: {
                usedSkillId: () => `GameData[Last][Used Skill ID]`,
                usedItemId: () => `GameData[Last][Used Item ID]`,
                actionActorId: () => `GameData[Last][Actor ID to Act]`,
                actionEnemyIndex: () => `GameData[Last][Enemy Index to Act]`,
                targetActorId: () => `GameData[Last][Target Actor ID]`,
                targetEnemyIndex: () => `GameData[Last][Target Enemy Index]`,
            },
            etc: {
                memberActorId: (index) => `GameData[Party][${(0, validate_1.argId)(index)}]`,
                memberCount: () => `GameData[PartyMembers]`,
                gold: () => `GameData[Gold]`,
                steps: () => `GameData[Steps]`,
                playTime: () => `GameData[PlayTime]`,
                timer: () => `GameData[Timer]`,
                saveCount: () => `GameData[SaveCount]`,
                battleCount: () => `GameData[BattleCount]`,
                winCount: () => `GameData[WinCount]`,
                escapeCount: () => `GameData[EscapeCount]`,
            },
        },
    });
    return list
        .map(({ op, value }) => (0, validate_1.tag)(constants_1.VARIABLE_OPERATOR[op], [
        (0, validate_1.arg)(id, (v, t) => (t.isFromTo(v) ? t.markFromTo(v) : v)),
        value,
    ]))
        .join("\n");
};
exports.Variable = Variable;
const SelfSwitch = ({ id, toBe }) => (0, validate_1.tag)("SelfSwitch", [id, toBe]);
exports.SelfSwitch = SelfSwitch;
const Timer = ({ mode, time }) => {
    if (typeof time === "string") {
        const [isValid, min, sec] = time.match(/^(\d{1,}):(\d{1,})$/) ?? [];
        if (isValid) {
            return (0, validate_1.tag)("Timer", [constants_1.TIMER_MODE[mode], min, sec]);
        }
        else {
            throw new Error("文字列でタイマー設定する場合は 00:00 形式で入力してください");
        }
    }
    const { min, sec } = time;
    return (0, validate_1.tag)("Timer", [constants_1.TIMER_MODE[mode], min, sec]);
};
exports.Timer = Timer;
