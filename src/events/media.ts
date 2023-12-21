import { Sound } from "../type";
import { argInt, argsSound, tag } from "../validate";

const commonSound = (name: string) => {
  const component = (sound: Sound) => tag(name, [argsSound(sound)]);
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
  const component = (time: number) => tag(name, [argInt(time)]);
  return component;
};
export const FadeoutBGM = commonFadeout("FadeoutBGM");
export const FadeoutBGS = commonFadeout("FadeoutBGS");

export const SaveBGM = () => tag("SaveBGM");
export const StopBGM = () => tag("StopBGM");
export const ReplayBGM = () => tag("ReplayBGM");
export const StopBGS = () => tag("StopBGS");
export const StopME = () => tag("StopME");
export const StopSE = () => tag("StopSE");

export const PlayMovie = (name: string) => tag("PlayMovie", [name]);
