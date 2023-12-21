import { CreaseOperator, VariableId } from "../type";
export declare const ChangeGold: (op: CreaseOperator, value: number | VariableId) => string;
export declare const ChangeItems: (id: number, op: CreaseOperator, value: number | VariableId) => string;
export declare const ChangeWeapons: (id: number, op: CreaseOperator, value: number | VariableId, includeEquipment?: boolean) => string;
export declare const ChangeArmors: (id: number, op: CreaseOperator, value: number | VariableId, includeEquipment?: boolean) => string;
export declare const ChangePartyMember: (id: number, op: CreaseOperator, value: number | VariableId, initialize?: boolean) => string;
//# sourceMappingURL=party.d.ts.map