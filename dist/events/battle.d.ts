import { ACTION_TARGET, ENEMY_MEMBER } from "../constants";
import { C, CreaseOperator, VariableId } from "../type";
export declare const ChangeEnemyHp: C<{
    index: keyof typeof ENEMY_MEMBER | number | VariableId;
    op: CreaseOperator;
    value: number | VariableId;
    allowKnockout?: boolean;
}>;
export declare const ChangeEnemyMp: C<{
    index: keyof typeof ENEMY_MEMBER | number | VariableId;
    op: CreaseOperator;
    value: number | VariableId;
}>;
export declare const ChangeEnemyTp: C<{
    index: keyof typeof ENEMY_MEMBER | number | VariableId;
    op: CreaseOperator;
    value: number | VariableId;
}>;
export declare const ChangeEnemyState: C<{
    index: keyof typeof ENEMY_MEMBER | number | VariableId;
    op: CreaseOperator;
    value: number | VariableId;
}>;
export declare const EnemyRecoverAll: C<{
    index: keyof typeof ENEMY_MEMBER | number | VariableId;
}>;
export declare const EnemyAppear: C<{
    index: keyof typeof ENEMY_MEMBER | number;
}>;
export declare const EnemyTransform: C<{
    index: number;
    id: number;
}>;
export declare const ShowBattleAnimation: C<{
    index: number;
    id: number;
}>;
export declare const ForceAction: C<{
    mode: "ENEMY" | "ACTOR";
    index: number;
    id: number;
    target: keyof typeof ACTION_TARGET | number;
}>;
//# sourceMappingURL=battle.d.ts.map