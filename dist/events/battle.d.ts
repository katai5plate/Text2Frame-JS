import { ACTION_TARGET, ENEMY_MEMBER } from "../constants";
import { CreaseOperator, VariableId } from "../type";
export declare const ChangeEnemyHp: (index: keyof typeof ENEMY_MEMBER | number | VariableId, op: CreaseOperator, value: number | VariableId, allowKnockout?: boolean) => string;
export declare const ChangeEnemyMp: (index: keyof typeof ENEMY_MEMBER | number | VariableId, op: CreaseOperator, value: number | VariableId) => string;
export declare const ChangeEnemyTp: (index: keyof typeof ENEMY_MEMBER | number | VariableId, op: CreaseOperator, value: number | VariableId) => string;
export declare const ChangeEnemyState: (index: keyof typeof ENEMY_MEMBER | number | VariableId, op: CreaseOperator, value: number | VariableId) => string;
export declare const EnemyRecoverAll: (index: keyof typeof ENEMY_MEMBER | number | VariableId) => string;
export declare const EnemyAppear: (index: keyof typeof ENEMY_MEMBER | number) => string;
export declare const EnemyTransform: (index: number, id: number) => string;
export declare const ShowBattleAnimation: (index: number, id: number) => string;
export declare const ForceAction: (mode: "ENEMY" | "ACTOR", index: number, id: number, target: keyof typeof ACTION_TARGET | number) => string;
//# sourceMappingURL=battle.d.ts.map