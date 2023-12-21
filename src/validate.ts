import { COLOR_TONE } from "./constants";
import {
  ArgValue,
  Color3,
  Color4,
  DirectOrVariables,
  FromTo,
  MapPosition,
  Sound,
  SwitchId,
  Text,
  VariableId,
} from "./type";

const joinKeep = (delim: string | null, arr: (Text | undefined)[]) =>
  arr.join(delim ?? ", ");
export const joinSkip = (delim: string | null, arr: (Text | undefined)[]) =>
  arr.filter((x) => x !== undefined).join(delim ?? ", ");

export const tag = (
  name: string,
  arg?: (Text | undefined)[],
  textChildren?: string
) => {
  const args = joinKeep(null, arg ?? []);
  return joinSkip("\n", [
    args !== "" ? `<${name}: ${args}>` : `<${name}>`,
    ...(textChildren ? [textChildren, `</${name}>`] : []),
  ]);
};

export const typeCase = (
  v: ArgValue,
  cases: Partial<{
    number: (v: number, e: () => Error) => number | string;
    string: (v: string, e: () => Error) => string;
    object: (v: object, e: () => Error) => string;
    variableId: (v: VariableId, e: () => Error) => string;
    switchId: (v: SwitchId, e: () => Error) => string;
    fromTo: (v: FromTo, e: () => Error) => string;
    mapPosition: (v: MapPosition, e: () => Error) => string;
    sound: (v: Sound, e: () => Error) => string;
    color: (v: Color3 | Color4, e: () => Error) => string;
  }>
) => {
  const e = () => new Error("サポートされていない型です");
  if (typeof v === "number" && cases.number) return cases.number(v, e);
  if (typeof v === "string" && cases.string) return cases.string(v, e);
  if (typeof v === "object") {
    if (cases.object) return cases.object(v, e);
    if ("variableId" in v && cases.variableId) return cases.variableId(v, e);
    if ("switchId" in v && cases.switchId) return cases.switchId(v, e);
    if ("from" in v && "to" in v && cases.fromTo) return cases.fromTo(v, e);
    if ("id" in v && "x" in v && "y" in v && cases.mapPosition)
      return cases.mapPosition(v, e);
    if (
      "name" in v &&
      "volume" in v &&
      "pitch" in v &&
      "pan" in v &&
      cases.sound
    )
      return cases.sound(v, e);
    if ("r" in v && "g" in v && "b" in v && cases.color)
      return cases.color(v, e);
  }
  throw e();
};

export const argInt = (v: number) => {
  if (v % 1 !== 0) {
    throw new Error(`値は整数である必要があります。`);
  }
  return v;
};
export const argRange = (v: number, range: FromTo) => {
  argInt(v);
  if (!(range.from <= v && v <= range.to)) {
    throw new Error(
      `値は ${range.from} ～ ${range.to} の間の値である必要があります。`
    );
  }
  return v;
};
export const argId = (v: number) => argRange(v, { from: 1, to: Infinity });
export const argEnemyIndex = (v: number) => argRange(v, { from: 1, to: 8 });
export const argPreset = <P extends Record<string, string>>(
  v: string,
  preset: P
) => preset[v];
export const argSwitchId = (value: SwitchId) => `SW[${value.switchId}]`;
export const argVariableId = (value: VariableId) => `V[${value.variableId}]`;
export const argFromTo = (value: FromTo) => `${value.from}-${value.to}`;
export const argsColor = (color: Color3 | Color4) =>
  `ColorTone[${color.r}][${color.g}][${color.b}]${
    (color as Color4)?.x ? `[${(color as Color4).x}]` : ""
  }`;
export const argsSound = (sound: Sound) =>
  joinKeep(null, [sound.name ?? "None", sound.volume, sound.pitch, sound.pan]);
export const argMapPosition = (mapos: MapPosition, mode: DirectOrVariables) =>
  `${mode === "DIRECT" ? "Direct" : "WithVariables"}[${mapos.id}][${mapos.x}][${
    mapos.y
  }]`;
export const argColorTone = <P extends Record<string, string>>(
  value: keyof P | Color4
) =>
  typeof value === "object"
    ? `ColorTone[${value.r}][${value.g}][${value.b}][${value.x}]`
    : argPreset(value as string, COLOR_TONE);

export const argIntOrVariableId = (v: number | VariableId) =>
  typeCase(v, {
    variableId: argVariableId,
    number: (x) => x,
  });

export const createPresetArg = <P extends Record<string, string>>(
  preset: P
) => {
  return (v: ArgValue) =>
    typeof v === "string" ? argPreset(v, preset) : argId(v as number);
};
export const createPresetArgWithVariableId =
  <P extends Record<string, string>>(preset: P, range?: FromTo) =>
  (v: ArgValue) =>
    typeCase(v, {
      string: (x) => argPreset(x, preset),
      variableId: argVariableId,
      number: (x) => (range ? argRange(x, range) : argId(x)),
    });
