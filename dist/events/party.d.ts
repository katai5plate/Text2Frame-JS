import { C, CreaseOperator, VariableId } from "../type";
export declare const ChangeGold: C<{
    op: CreaseOperator;
    value: number | VariableId;
}>;
export declare const ChangeItems: C<{
    id: number;
    op: CreaseOperator;
    value: number | VariableId;
}>;
export declare const ChangeWeapons: C<{
    id: number;
    op: CreaseOperator;
    value: number | VariableId;
    includeEquipment?: boolean;
}>;
export declare const ChangeArmors: C<{
    id: number;
    op: CreaseOperator;
    value: number | VariableId;
    includeEquipment?: boolean;
}>;
export declare const ChangePartyMember: C<{
    id: number;
    op: CreaseOperator;
    value: number | VariableId;
    initialize?: boolean;
}>;
//# sourceMappingURL=party.d.ts.map