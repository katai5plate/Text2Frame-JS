import { VEHICLE } from "../constants";
import { Color3, Sound } from "../type";
import {
  argId,
  argPreset,
  argRange,
  argsColor,
  argsSound,
  tag,
} from "../validate";

export const ChangeVehicleBgm = (vehicle: keyof typeof VEHICLE, sound: Sound) =>
  tag("ChangeVehicleBgm", [argPreset(vehicle, VEHICLE), argsSound(sound)]);

const commonChange = (name: string) => {
  const component = (allow: boolean) => tag(name, [allow]);
  return component;
};
export const ChangeSaveAccess = commonChange("ChangeSaveAccess");
export const ChangeMenuAccess = commonChange("ChangeMenuAccess");
export const ChangeEncounter = commonChange("ChangeEncounter");
export const ChangeFormationAccess = commonChange("ChangeFormationAccess");

export const ChangeWindowColor = (color: Color3) =>
  tag("ChangeWindowColor", [argsColor(color)]);

export const ChangeActorImages = (
  id: number,
  face: { name: string; index: number },
  character: { name: string; index: number },
  battler: string
) =>
  tag("ChangeActorImages", [
    argId(id),
    face.name,
    argRange(face.index, { from: 0, to: 15 }),
    character.name,
    argRange(character.index, { from: 0, to: 7 }),
    battler,
  ]);

export const ChangeVehicleImage = (
  vehicle: keyof typeof VEHICLE,
  image: { name: string; index: number }
) =>
  tag("ChangeActorImages", [
    argPreset(vehicle, VEHICLE),
    image.name,
    argRange(image.index, { from: 0, to: 7 }),
  ]);
