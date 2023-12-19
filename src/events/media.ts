import { C, Sound } from "../type";
import { arg, argInt, tag } from "../validate";

const commonSound = (name: string) => {
  const component: C<{ sound: Sound }> = ({ sound }) =>
    tag(name, [arg(sound, (v, t) => t.markSoundArgs(v))]);
  return component;
};
export const PlayBGM = commonSound("PlayBGM");
export const PlayBGS = commonSound("PlayBGS");
export const PlayME = commonSound("PlayME");
export const PlaySE = commonSound("PlaySE");
export const ChangeBattleBGM = commonSound("ChangeBattleBGM");
export const ChangeVictoryMe = commonSound("ChangeVictoryMe");
export const ChangeDefeatMe = commonSound("ChangeDefeatMe");

const commonFadeout = (name: string) => {
  const component: C<{ time: number }> = ({ time }) =>
    tag(name, [argInt(time)]);
  return component;
};
export const FadeoutBGM = commonFadeout("FadeoutBGM");
export const FadeoutBGS = commonFadeout("FadeoutBGS");

export const SaveBGM: C = () => tag("SaveBGM");
export const StopBGM: C = () => tag("StopBGM");
export const ReplayBGM: C = () => tag("ReplayBGM");
export const StopBGS: C = () => tag("StopBGS");
export const StopME: C = () => tag("StopME");
export const StopSE: C = () => tag("StopSE");

export const PlayMovie: C<{ name: string }> = ({ name }) =>
  tag("PlayMovie", [name]);
