import { CreaseOperator, VariableId } from "../type";
import { argId, argIntOrVariableId, tag } from "../validate";

export const ChangeGold = (op: CreaseOperator, value: number | VariableId) =>
  tag("ChangeGold", [op, argIntOrVariableId(value)]);

export const ChangeItems = (
  id: number,
  op: CreaseOperator,
  value: number | VariableId
) => tag("ChangeItems", [argId(id), op, argIntOrVariableId(value)]);

const commonChange = (name: string) => {
  const component = (
    id: number,
    op: CreaseOperator,
    value: number | VariableId,
    includeEquipment?: boolean
  ) => tag(name, [argId(id), op, argIntOrVariableId(value), includeEquipment]);
  return component;
};
export const ChangeWeapons = commonChange("ChangeWeapons");
export const ChangeArmors = commonChange("ChangeArmors");

export const ChangePartyMember = (
  id: number,
  op: CreaseOperator,
  value: number | VariableId,
  initialize?: boolean
) => tag("ChangeItems", [argId(id), op, argIntOrVariableId(value), initialize]);
