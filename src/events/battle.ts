import { ACTION_TARGET, ENEMY_MEMBER } from "../constants";
import { CreaseOperator, VariableId } from "../type";
import {
  argEnemyIndex,
  argId,
  argIntOrVariableId,
  argPreset,
  argRange,
  createPresetArgWithVariableId,
  tag,
  typeCase,
} from "../validate";

const argEnemyIndexWithPreset = createPresetArgWithVariableId(ENEMY_MEMBER);
const argEnemyIndexWithPresetAndVariableId = createPresetArgWithVariableId(
  ENEMY_MEMBER,
  { from: 1, to: 8 }
);

export const ChangeEnemyHp = (
  index: keyof typeof ENEMY_MEMBER | number | VariableId,
  op: CreaseOperator,
  value: number | VariableId,
  allowKnockout?: boolean
) =>
  tag("ChangeEnemyHp", [
    argEnemyIndexWithPresetAndVariableId(index),
    op,
    argIntOrVariableId(value),
    allowKnockout,
  ]);

const commonChange = (name: string) => {
  const component = (
    index: keyof typeof ENEMY_MEMBER | number | VariableId,
    op: CreaseOperator,
    value: number | VariableId
  ) =>
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

export const EnemyRecoverAll = (
  index: keyof typeof ENEMY_MEMBER | number | VariableId
) => tag("EnemyRecoverAll", [argEnemyIndexWithPresetAndVariableId(index)]);

export const EnemyAppear = (index: keyof typeof ENEMY_MEMBER | number) =>
  tag("EnemyAppear", [argEnemyIndexWithPreset(index)]);

const commonIndexAndEnemyId = (name: string) => {
  const component = (index: number, id: number) =>
    tag(name, [argEnemyIndex(index), argId(id)]);
  return component;
};
export const EnemyTransform = commonIndexAndEnemyId("EnemyTransform");
export const ShowBattleAnimation = commonIndexAndEnemyId("ShowBattleAnimation");

export const ForceAction = (
  mode: "ENEMY" | "ACTOR",
  index: number,
  id: number,
  target: keyof typeof ACTION_TARGET | number
) =>
  tag("ForceAction", [
    typeCase(index, {
      number: (x) =>
        mode === "ACTOR" ? `Actor[${argId(x)}]` : argEnemyIndex(x),
    }),
    argId(id),
    typeCase(target, {
      string: (x) => argPreset(x, ACTION_TARGET),
      number: (x) => `Index ${argRange(x, { from: 1, to: 8 })}`,
    }),
  ]);
