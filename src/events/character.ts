import { BALLOON, CHARACTER } from "../constants";
import { C } from "../type";
import { argId, argNumberPreset, argPreset, tag } from "../validate";

const commonChange = (name: string) => {
  const component: C<{
    active: boolean;
  }> = ({ active }) => tag(name, [active]);
  return component;
};
export const ChangeTransparency = commonChange("ChangeTransparency");
export const ChangePlayerFollowers = commonChange("ChangePlayerFollowers");

export const GatherFollowers: C = () => tag("GatherFollowers");

export const ShowAnimation: C<{
  id: keyof typeof CHARACTER | number;
  animationId: number;
  wait?: boolean;
}> = ({ id, animationId, wait }) =>
  tag("ShowAnimation", [
    argNumberPreset(id, CHARACTER, true),
    argId(animationId),
    wait,
  ]);

export const ShowBalloonIcon: C<{
  id: keyof typeof CHARACTER | number;
  balloon: keyof typeof BALLOON;
  wait?: boolean;
}> = ({ id, balloon, wait }) =>
  tag("ShowBalloonIcon", [
    argNumberPreset(id, CHARACTER, true),
    argPreset(balloon, BALLOON),
    wait,
  ]);

export const EraseEvent: C = () => tag("EraseEvent");
