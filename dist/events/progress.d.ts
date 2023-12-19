import { CHARACTER, TIMER_MODE } from "../constants";
import { C, FromTo, SelfSwitchName, SwitchId } from "../type";
export declare const Switch: C<{
    id: SwitchId | FromTo;
    toBe: boolean;
}>;
interface Operations {
    set: (value: number | string) => {
        op: string;
        value: number | string;
    };
    add: (value: number | string) => {
        op: string;
        value: number | string;
    };
    sub: (value: number | string) => {
        op: string;
        value: number | string;
    };
    mul: (value: number | string) => {
        op: string;
        value: number | string;
    };
    div: (value: number | string) => {
        op: string;
        value: number | string;
    };
    mod: (value: number | string) => {
        op: string;
        value: number | string;
    };
}
interface Data {
    variable: (id: number) => string;
    random: (range: {
        from: number;
        to: number;
    }) => string;
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
export declare const Variable: C<{
    id: number | FromTo;
    calc: (op: Operations, data: Data) => {
        op: string;
        value: number | string;
    }[];
}>;
export declare const SelfSwitch: C<{
    id: SelfSwitchName;
    toBe: boolean;
}>;
export declare const Timer: C<{
    mode: keyof typeof TIMER_MODE;
    time: {
        min: number;
        sec: number;
    } | `${number}:${number}`;
}>;
export {};
//# sourceMappingURL=progress.d.ts.map