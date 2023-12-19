import { C, CreaseOperator, VariableId } from "../type";
import { argId, argIntOrVariableId, tag } from "../validate";

export const ChangeGold: C<{
  op: CreaseOperator;
  value: number | VariableId;
}> = ({ op, value }) => tag("ChangeGold", [op, argIntOrVariableId(value)]);

export const ChangeItems: C<{
  id: number;
  op: CreaseOperator;
  value: number | VariableId;
}> = ({ id, op, value }) =>
  tag("ChangeItems", [argId(id), op, argIntOrVariableId(value)]);

export const ChangeWeapons: C<{
  id: number;
  op: CreaseOperator;
  value: number | VariableId;
  includeEquipment?: boolean;
}> = ({ id, op, value, includeEquipment }) =>
  tag("ChangeWeapons", [
    argId(id),
    op,
    argIntOrVariableId(value),
    includeEquipment,
  ]);

export const ChangeArmors: C<{
  id: number;
  op: CreaseOperator;
  value: number | VariableId;
  includeEquipment?: boolean;
}> = ({ id, op, value, includeEquipment }) =>
  tag("ChangeArmors", [
    argId(id),
    op,
    argIntOrVariableId(value),
    includeEquipment,
  ]);

export const ChangePartyMember: C<{
  id: number;
  op: CreaseOperator;
  value: number | VariableId;
  initialize?: boolean;
}> = ({ id, op, value, initialize }) =>
  tag("ChangeItems", [argId(id), op, argIntOrVariableId(value), initialize]);
