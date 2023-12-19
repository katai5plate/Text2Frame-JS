import { VEHICLE } from "../constants";
import { C, Color3, Sound } from "../type";
import { arg, argId, argPreset, argRange, tag } from "../validate";

export const ChangeVehicleBgm: C<{
  vehicle: keyof typeof VEHICLE;
  sound: Sound;
}> = ({ vehicle, sound }) =>
  tag("ChangeVehicleBgm", [
    argPreset(vehicle, VEHICLE),
    arg(sound, (v, t) => t.markSoundArgs(v)),
  ]);

const commonChange = (name: string) => {
  const component: C<{ allow: boolean }> = ({ allow }) => tag(name, [allow]);
  return component;
};
export const ChangeSaveAccess = commonChange("ChangeSaveAccess");
export const ChangeMenuAccess = commonChange("ChangeMenuAccess");
export const ChangeEncounter = commonChange("ChangeEncounter");
export const ChangeFormationAccess = commonChange("ChangeFormationAccess");

export const ChangeWindowColor: C<{
  color: Color3;
}> = ({ color }) =>
  tag("ChangeWindowColor", [arg(color, (v, t) => t.markColorArgs(v))]);

export const ChangeActorImages: C<{
  id: number;
  face: { name: string; index: number };
  character: { name: string; index: number };
  battler: string;
}> = ({ id, face, character, battler }) =>
  tag("ChangeActorImages", [
    argId(id),
    face.name,
    argRange(face.index, { from: 0, to: 15 }),
    character.name,
    argRange(character.index, { from: 0, to: 7 }),
    battler,
  ]);

export const ChangeVehicleImage: C<{
  vehicle: keyof typeof VEHICLE;
  image: { name: string; index: number };
}> = ({ vehicle, image }) =>
  tag("ChangeActorImages", [
    argPreset(vehicle, VEHICLE),
    image.name,
    argRange(image.index, { from: 0, to: 7 }),
  ]);
