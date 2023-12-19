import { ACTER_PARAMETER, ACTOR_MEMBER } from "../constants";
import { C, CreaseOperator, VariableId } from "../type";
export declare const ChangeHp: C<{
    id: keyof typeof ACTOR_MEMBER | number | VariableId;
    op: CreaseOperator;
    value: number | VariableId;
    allowKnockout?: boolean;
}>;
export declare const ChangeMp: C<{
    id: keyof typeof ACTOR_MEMBER | number | VariableId;
    op: CreaseOperator;
    value: number | VariableId;
}>;
export declare const ChangeTp: C<{
    id: keyof typeof ACTOR_MEMBER | number | VariableId;
    op: CreaseOperator;
    value: number | VariableId;
}>;
export declare const ChangeState: C<{
    id: keyof typeof ACTOR_MEMBER | number | VariableId;
    op: CreaseOperator;
    value: number | VariableId;
}>;
export declare const ChangeSkill: C<{
    id: keyof typeof ACTOR_MEMBER | number | VariableId;
    op: CreaseOperator;
    value: number | VariableId;
}>;
export declare const RecoverAll: C<{
    id: keyof typeof ACTOR_MEMBER | number | VariableId;
}>;
export declare const ChangeExp: C<{
    id: keyof typeof ACTOR_MEMBER | number | VariableId;
    op: CreaseOperator;
    value: number | VariableId;
    allowLevelUp?: boolean | undefined;
}>;
export declare const ChangeLevel: C<{
    id: keyof typeof ACTOR_MEMBER | number | VariableId;
    op: CreaseOperator;
    value: number | VariableId;
    allowLevelUp?: boolean | undefined;
}>;
export declare const ChangeParameter: C<{
    id: keyof typeof ACTOR_MEMBER | number | VariableId;
    parameter: keyof typeof ACTER_PARAMETER;
    op: CreaseOperator;
    value: number | VariableId;
}>;
export declare const ChangeEquipment: C<{
    id: number;
    equipType: number;
    equipId?: number;
}>;
export declare const ChangeName: C<{
    id: number;
    name: string;
}>;
export declare const ChangeClass: C<{
    id: number;
    classId: number;
    saveLevelAndExp?: boolean;
}>;
export declare const ChangeNickname: C<{
    id: number;
    name: string;
}>;
export declare const ChangeProfile: C<{
    id: number;
    profile: [string, string];
}>;
//# sourceMappingURL=actor.d.ts.map