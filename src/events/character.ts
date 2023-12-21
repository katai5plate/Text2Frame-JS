import { BALLOON, CHARACTER } from "../constants";
import { argId, argPreset, tag, typeCase } from "../validate";

const argNumberPreset = <P extends Record<string, string>>(
  v: number | string,
  preset: P
) =>
  typeCase(v, {
    string: (x) => argPreset(x, preset),
    number: argId,
  });

const commonChange = (name: string) => {
  const component = (active: boolean) => tag(name, [active]);
  return component;
};
export const ChangeTransparency = commonChange("ChangeTransparency");
export const ChangePlayerFollowers = commonChange("ChangePlayerFollowers");

export const GatherFollowers = () => tag("GatherFollowers");

export const ShowAnimation = (
  id: keyof typeof CHARACTER | number,
  animationId: number,
  wait?: boolean
) =>
  tag("ShowAnimation", [
    argNumberPreset(id, CHARACTER),
    argId(animationId),
    wait,
  ]);

export const ShowBalloonIcon = (
  id: keyof typeof CHARACTER | number,
  balloon: keyof typeof BALLOON,
  wait?: boolean
) =>
  tag("ShowBalloonIcon", [
    argNumberPreset(id, CHARACTER),
    argPreset(balloon, BALLOON),
    wait,
  ]);

export const EraseEvent = () => tag("EraseEvent");
