import { CHARACTER, TIMER_MODE, VARIABLE_OPERATOR } from "../constants";
import { C, FromTo, SelfSwitchName, SwitchId } from "../type";
import {
  arg,
  argCharacterIdWithPreset,
  argEnemyIndex,
  argId,
  argInt,
  tag,
} from "../validate";

export const Switch: C<{
  id: SwitchId | FromTo;
  toBe: boolean;
}> = ({ id, toBe }) =>
  tag("Switch", [
    arg(id, (v, t) => (t.isSwitchId(v) ? t.markSwitchId(v) : t.markFromTo(v))),
    toBe,
  ]);

interface Operations {
  set: (value: number | string) => { op: string; value: number | string };
  add: (value: number | string) => { op: string; value: number | string };
  sub: (value: number | string) => { op: string; value: number | string };
  mul: (value: number | string) => { op: string; value: number | string };
  div: (value: number | string) => { op: string; value: number | string };
  mod: (value: number | string) => { op: string; value: number | string };
}
interface Data {
  variable: (id: number) => string;
  random: (range: { from: number; to: number }) => string;
  script: (js: string) => string;
  game: {
    item: {
      itemCount: (id: number) => string;
      weaponCount: (id: number) => string;
      armorCount: (id: number) => string;
    };
    actor: {
      level: (id: number) => string;
      exp: (id: number) => string;
      HP: (id: number) => string;
      MP: (id: number) => string;
      maxHP: (id: number) => string;
      MaxMP: (id: number) => string;
      attack: (id: number) => string;
      defense: (id: number) => string;
      mAttack: (id: number) => string;
      mDefense: (id: number) => string;
      agility: (id: number) => string;
      luck: (id: number) => string;
      TP: (id: number) => string;
    };
    enemy: {
      HP: (id: number) => string;
      MP: (id: number) => string;
      maxHP: (id: number) => string;
      MaxMP: (id: number) => string;
      attack: (id: number) => string;
      defense: (id: number) => string;
      mAttack: (id: number) => string;
      mDefense: (id: number) => string;
      agility: (id: number) => string;
      luck: (id: number) => string;
      TP: (id: number) => string;
    };
    character: {
      mapX: (characterId: keyof typeof CHARACTER | number) => string;
      mapY: (characterId: keyof typeof CHARACTER | number) => string;
      direction: (characterId: keyof typeof CHARACTER | number) => string;
      screenX: (characterId: keyof typeof CHARACTER | number) => string;
      screenY: (characterId: keyof typeof CHARACTER | number) => string;
    };
    last: {
      usedSkillId: () => string;
      usedItemId: () => string;
      actionActorId: () => string;
      actionEnemyIndex: () => string;
      targetActorId: () => string;
      targetEnemyIndex: () => string;
    };
    etc: {
      memberActorId: (index: number) => string;
      memberCount: () => string;
      gold: () => string;
      steps: () => string;
      playTime: () => string;
      timer: () => string;
      saveCount: () => string;
      battleCount: () => string;
      winCount: () => string;
      escapeCount: () => string;
    };
  };
}
export const Variable: C<{
  id: number | FromTo;
  calc: (
    op: Operations,
    data: Data
  ) => { op: string; value: number | string }[];
}> = ({ id, calc }) => {
  const list = calc(
    {
      set: (value: number | string) => ({
        op: "SET",
        value: value,
      }),
      add: (value: number | string) => ({
        op: "ADD",
        value: value,
      }),
      sub: (value: number | string) => ({
        op: "SUB",
        value: value,
      }),
      mul: (value: number | string) => ({
        op: "MUL",
        value: value,
      }),
      div: (value: number | string) => ({
        op: "DIV",
        value: value,
      }),
      mod: (value: number | string) => ({
        op: "MOD",
        value: value,
      }),
    },
    {
      variable: (id: number) => `V[${argId(id)}]`,
      random: ({ from, to }: FromTo) =>
        `Random[${argInt(from)}][${argInt(to)}]`,
      script: (js: string) => `Script[${js}]`,
      game: {
        item: {
          itemCount: (id: number) => `GameData[Item][${argId(id)}]`,
          weaponCount: (id: number) => `GameData[Weapon][${argId(id)}]`,
          armorCount: (id: number) => `GameData[Armor][${argId(id)}]`,
        },
        actor: {
          level: (id: number) => `GameData[Actor][Level][${argId(id)}]`,
          exp: (id: number) => `GameData[Actor][Exp][${argId(id)}]`,
          HP: (id: number) => `GameData[Actor][HP][${argId(id)}]`,
          MP: (id: number) => `GameData[Actor][MP][${argId(id)}]`,
          maxHP: (id: number) => `GameData[Actor][MaxHp][${argId(id)}]`,
          MaxMP: (id: number) => `GameData[Actor][MaxMP][${argId(id)}]`,
          attack: (id: number) => `GameData[Actor][Attack][${argId(id)}]`,
          defense: (id: number) => `GameData[Actor][Defense][${argId(id)}]`,
          mAttack: (id: number) => `GameData[Actor][M.Attack][${argId(id)}]`,
          mDefense: (id: number) => `GameData[Actor][M.Defense][${argId(id)}]`,
          agility: (id: number) => `GameData[Actor][Agility][${argId(id)}]`,
          luck: (id: number) => `GameData[Actor][Luck][${argId(id)}]`,
          TP: (id: number) => `GameData[Actor][TP][${argId(id)}]`,
        },
        enemy: {
          HP: (index: number) => `GameData[Enemy][HP][${argEnemyIndex(index)}]`,
          MP: (index: number) => `GameData[Enemy][MP][${argEnemyIndex(index)}]`,
          maxHP: (index: number) =>
            `GameData[Enemy][MaxHp][${argEnemyIndex(index)}]`,
          MaxMP: (index: number) =>
            `GameData[Enemy][MaxMP][${argEnemyIndex(index)}]`,
          attack: (index: number) =>
            `GameData[Enemy][Attack][${argEnemyIndex(index)}]`,
          defense: (index: number) =>
            `GameData[Enemy][Defense][${argEnemyIndex(index)}]`,
          mAttack: (index: number) =>
            `GameData[Enemy][M.Attack][${argEnemyIndex(index)}]`,
          mDefense: (index: number) =>
            `GameData[Enemy][M.Defense][${argEnemyIndex(index)}]`,
          agility: (index: number) =>
            `GameData[Enemy][Agility][${argEnemyIndex(index)}]`,
          luck: (index: number) =>
            `GameData[Enemy][Luck][${argEnemyIndex(index)}]`,
          TP: (index: number) => `GameData[Enemy][TP][${argEnemyIndex(index)}]`,
        },
        character: {
          mapX: (characterId: keyof typeof CHARACTER | number) =>
            `GameData[Character][${argCharacterIdWithPreset(
              characterId
            )}][MapX]`,
          mapY: (characterId: keyof typeof CHARACTER | number) =>
            `GameData[Character][${argCharacterIdWithPreset(
              characterId
            )}][MapY]`,
          direction: (characterId: keyof typeof CHARACTER | number) =>
            `GameData[Character][${argCharacterIdWithPreset(
              characterId
            )}][Direction]`,
          screenX: (characterId: keyof typeof CHARACTER | number) =>
            `GameData[Character][${argCharacterIdWithPreset(
              characterId
            )}][ScreenX]`,
          screenY: (characterId: keyof typeof CHARACTER | number) =>
            `GameData[Character][${argCharacterIdWithPreset(
              characterId
            )}][ScreenY]`,
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
          memberActorId: (index: number) => `GameData[Party][${argId(index)}]`,
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
    }
  );
  return list
    .map(({ op, value }) =>
      tag(VARIABLE_OPERATOR[op as keyof typeof VARIABLE_OPERATOR], [
        arg(id, (v, t) => (t.isFromTo(v) ? t.markFromTo(v) : v)),
        value,
      ])
    )
    .join("\n");
};

export const SelfSwitch: C<{
  id: SelfSwitchName;
  toBe: boolean;
}> = ({ id, toBe }) => tag("SelfSwitch", [id, toBe]);

export const Timer: C<{
  mode: keyof typeof TIMER_MODE;
  time: { min: number; sec: number } | `${number}:${number}`;
}> = ({ mode, time }) => {
  if (typeof time === "string") {
    const [isValid, min, sec] = time.match(/^(\d{1,}):(\d{1,})$/) ?? [];
    if (isValid) {
      return tag("Timer", [TIMER_MODE[mode], min, sec]);
    } else {
      throw new Error(
        "文字列でタイマー設定する場合は 00:00 形式で入力してください"
      );
    }
  }
  const { min, sec } = time;
  return tag("Timer", [TIMER_MODE[mode], min, sec]);
};
