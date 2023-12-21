import { ACTER_PARAMETER, ACTOR_MEMBER } from "../constants";
import { CreaseOperator, VariableId } from "../type";
import {
  argId,
  argIntOrVariableId,
  argPreset,
  createPresetArgWithVariableId,
  tag,
} from "../validate";

const argActorIdWithPreset = createPresetArgWithVariableId(ACTOR_MEMBER);

export const ChangeHp = (
  id: keyof typeof ACTOR_MEMBER | number | VariableId,
  op: CreaseOperator,
  value: number | VariableId,
  allowKnockout?: boolean
) =>
  tag("ChangeHp", [
    argActorIdWithPreset(id),
    op,
    argIntOrVariableId(value),
    allowKnockout,
  ]);

const commonChange = (name: string) => {
  const component = (
    id: keyof typeof ACTOR_MEMBER | number | VariableId,
    op: CreaseOperator,
    value: number | VariableId
  ) => tag(name, [argActorIdWithPreset(id), op, argIntOrVariableId(value)]);
  return component;
};
export const ChangeMp = commonChange("ChangeMp");
export const ChangeTp = commonChange("ChangeTp");
export const ChangeState = commonChange("ChangeState");
export const ChangeSkill = commonChange("ChangeSkill");

export const RecoverAll = (
  id: keyof typeof ACTOR_MEMBER | number | VariableId
) => tag("RecoverAll", [argActorIdWithPreset(id)]);

const commonLevelUp = (name: string) => {
  const component = (
    id: keyof typeof ACTOR_MEMBER | number | VariableId,
    op: CreaseOperator,
    value: number | VariableId,
    allowLevelUp?: boolean
  ) =>
    tag(name, [
      argActorIdWithPreset(id),
      op,
      argIntOrVariableId(value),
      allowLevelUp,
    ]);
  return component;
};
export const ChangeExp = commonLevelUp("ChangeExp");
export const ChangeLevel = commonLevelUp("ChangeLevel");

export const ChangeParameter = (
  id: keyof typeof ACTOR_MEMBER | number | VariableId,
  parameter: keyof typeof ACTER_PARAMETER,
  op: CreaseOperator,
  value: number | VariableId
) =>
  tag("ChangeParameter", [
    argActorIdWithPreset(id),
    argPreset(parameter, ACTER_PARAMETER),
    op,
    argIntOrVariableId(value),
  ]);

export const ChangeEquipment = (
  id: number,
  equipType: number,
  equipId?: number
) =>
  tag("ChangeEquipment", [
    argId(id),
    argId(equipType),
    equipId && argId(equipId),
  ]);

export const ChangeName = (id: number, name: string) =>
  tag("ChangeName", [argId(id), name]);

export const ChangeClass = (
  id: number,
  classId: number,
  saveLevelAndExp?: boolean
) => tag("ChangeClass", [argId(id), argId(classId), saveLevelAndExp]);

export const ChangeNickname = (id: number, name: string) =>
  tag("ChangeNickname", [argId(id), name]);

export const ChangeProfile = (id: number, profile: [string, string]) =>
  tag("ChangeProfile", [argId(id), profile[0], profile[1]]);
