import { ACTER_PARAMETER, ACTOR_MEMBER } from "../constants";
import { CreaseOperator, VariableId } from "../type";
export declare const ChangeHp: (id: keyof typeof ACTOR_MEMBER | number | VariableId, op: CreaseOperator, value: number | VariableId, allowKnockout?: boolean) => string;
export declare const ChangeMp: (id: keyof typeof ACTOR_MEMBER | number | VariableId, op: CreaseOperator, value: number | VariableId) => string;
export declare const ChangeTp: (id: keyof typeof ACTOR_MEMBER | number | VariableId, op: CreaseOperator, value: number | VariableId) => string;
export declare const ChangeState: (id: keyof typeof ACTOR_MEMBER | number | VariableId, op: CreaseOperator, value: number | VariableId) => string;
export declare const ChangeSkill: (id: keyof typeof ACTOR_MEMBER | number | VariableId, op: CreaseOperator, value: number | VariableId) => string;
export declare const RecoverAll: (id: keyof typeof ACTOR_MEMBER | number | VariableId) => string;
export declare const ChangeExp: (id: keyof typeof ACTOR_MEMBER | number | VariableId, op: CreaseOperator, value: number | VariableId, allowLevelUp?: boolean) => string;
export declare const ChangeLevel: (id: keyof typeof ACTOR_MEMBER | number | VariableId, op: CreaseOperator, value: number | VariableId, allowLevelUp?: boolean) => string;
export declare const ChangeParameter: (id: keyof typeof ACTOR_MEMBER | number | VariableId, parameter: keyof typeof ACTER_PARAMETER, op: CreaseOperator, value: number | VariableId) => string;
export declare const ChangeEquipment: (id: number, equipType: number, equipId?: number) => string;
export declare const ChangeName: (id: number, name: string) => string;
export declare const ChangeClass: (id: number, classId: number, saveLevelAndExp?: boolean) => string;
export declare const ChangeNickname: (id: number, name: string) => string;
export declare const ChangeProfile: (id: number, profile: [string, string]) => string;
//# sourceMappingURL=actor.d.ts.map