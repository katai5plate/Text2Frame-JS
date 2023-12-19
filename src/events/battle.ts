import { ACTION_TARGET, ENEMY_MEMBER } from "../constants";
import { C, CreaseOperator, VariableId } from "../type";
import {
  arg,
  argEnemyIndex,
  argEnemyIndexWithPreset,
  argEnemyIndexWithPresetAndVariableId,
  argId,
  argIntOrVariableId,
  tag,
} from "../validate";

export const ChangeEnemyHp: C<{
  index: keyof typeof ENEMY_MEMBER | number | VariableId;
  op: CreaseOperator;
  value: number | VariableId;
  allowKnockout?: boolean;
}> = ({ index, op, value, allowKnockout }) =>
  tag("ChangeEnemyHp", [
    argEnemyIndexWithPresetAndVariableId(index),
    op,
    argIntOrVariableId(value),
    allowKnockout,
  ]);

const commonChange = (name: string) => {
  const component: C<{
    index: keyof typeof ENEMY_MEMBER | number | VariableId;
    op: CreaseOperator;
    value: number | VariableId;
  }> = ({ index, op, value }) =>
    tag(name, [
      argEnemyIndexWithPresetAndVariableId(index),
      op,
      argIntOrVariableId(value),
    ]);
  return component;
};
export const ChangeEnemyMp = commonChange("ChangeEnemyMp");
export const ChangeEnemyTp = commonChange("ChangeEnemyTp");
export const ChangeEnemyState = commonChange("ChangeEnemyState");

export const EnemyRecoverAll: C<{
  index: keyof typeof ENEMY_MEMBER | number | VariableId;
}> = ({ index }) =>
  tag("EnemyRecoverAll", [argEnemyIndexWithPresetAndVariableId(index)]);

export const EnemyAppear: C<{
  index: keyof typeof ENEMY_MEMBER | number;
}> = ({ index }) => tag("EnemyAppear", [argEnemyIndexWithPreset(index)]);

const commonIndexAndEnemyId = (name: string) => {
  const component: C<{
    index: number;
    id: number;
  }> = ({ index, id }) => tag(name, [argEnemyIndex(index), argId(id)]);
  return component;
};
export const EnemyTransform = commonIndexAndEnemyId("EnemyTransform");
export const ShowBattleAnimation = commonIndexAndEnemyId("ShowBattleAnimation");

export const ForceAction: C<{
  mode: "ENEMY" | "ACTOR";
  index: number;
  id: number;
  target: keyof typeof ACTION_TARGET | number;
}> = ({ mode, index, id, target }) =>
  tag("ForceAction", [
    arg(index, (v, t) => {
      if (mode === "ACTOR") return `Actor[${t.validId(v)}]`;
      return argEnemyIndex(v);
    }),
    argId(id),
    arg(target, (v, t) => {
      if (typeof v === "string") return t.markPreset(v, ACTION_TARGET);
      return `Index ${t.validRange(v, 1, 8)}`;
    }),
  ]);
