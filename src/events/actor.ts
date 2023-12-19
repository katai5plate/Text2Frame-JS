import { ACTER_PARAMETER, ACTOR_MEMBER } from "../constants";
import { C, CreaseOperator, VariableId } from "../type";
import {
  arg,
  argActorIdWithPreset,
  argId,
  argIntOrVariableId,
  tag,
} from "../validate";

export const ChangeHp: C<{
  id: keyof typeof ACTOR_MEMBER | number | VariableId;
  op: CreaseOperator;
  value: number | VariableId;
  allowKnockout?: boolean;
}> = ({ id, op, value, allowKnockout }) =>
  tag("ChangeHp", [
    argActorIdWithPreset(id),
    op,
    argIntOrVariableId(value),
    allowKnockout,
  ]);

const commonChange = (name: string) => {
  const component: C<{
    id: keyof typeof ACTOR_MEMBER | number | VariableId;
    op: CreaseOperator;
    value: number | VariableId;
  }> = ({ id, op, value }) =>
    tag(name, [argActorIdWithPreset(id), op, argIntOrVariableId(value)]);
  return component;
};
export const ChangeMp = commonChange("ChangeMp");
export const ChangeTp = commonChange("ChangeTp");
export const ChangeState = commonChange("ChangeState");
export const ChangeSkill = commonChange("ChangeSkill");

export const RecoverAll: C<{
  id: keyof typeof ACTOR_MEMBER | number | VariableId;
}> = ({ id }) => tag("RecoverAll", [argActorIdWithPreset(id)]);

const commonLevelUp = (name: string) => {
  const component: C<{
    id: keyof typeof ACTOR_MEMBER | number | VariableId;
    op: CreaseOperator;
    value: number | VariableId;
    allowLevelUp?: boolean;
  }> = ({ id, op, value, allowLevelUp }) =>
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

export const ChangeParameter: C<{
  id: keyof typeof ACTOR_MEMBER | number | VariableId;
  parameter: keyof typeof ACTER_PARAMETER;
  op: CreaseOperator;
  value: number | VariableId;
}> = ({ id, parameter, op, value }) =>
  tag("ChangeParameter", [
    argActorIdWithPreset(id),
    arg(parameter, (v, t) => t.markPreset(v, ACTER_PARAMETER)),
    op,
    argIntOrVariableId(value),
  ]);

export const ChangeEquipment: C<{
  id: number;
  equipType: number;
  equipId?: number;
}> = ({ id, equipType, equipId }) =>
  tag("ChangeEquipment", [
    argId(id),
    argId(equipType),
    equipId && argId(equipId),
  ]);

export const ChangeName: C<{
  id: number;
  name: string;
}> = ({ id, name }) => tag("ChangeName", [argId(id), name]);

export const ChangeClass: C<{
  id: number;
  classId: number;
  saveLevelAndExp?: boolean;
}> = ({ id, classId, saveLevelAndExp }) =>
  tag("ChangeClass", [argId(id), argId(classId), saveLevelAndExp]);

export const ChangeNickname: C<{
  id: number;
  name: string;
}> = ({ id, name }) => tag("ChangeNickname", [argId(id), name]);

export const ChangeProfile: C<{
  id: number;
  profile: [string, string];
}> = ({ id, profile: [l1, l2] }) => tag("ChangeProfile", [argId(id), l1, l2]);
