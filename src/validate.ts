import { ACTOR_MEMBER, CHARACTER, ENEMY_MEMBER } from "./constants";
import {
  ArgValue,
  FromTo,
  Text,
  MapPosition,
  DirectOrVariables,
  Sound,
  SwitchId,
  VariableId,
  Color4,
  Color3,
} from "./type";

export const arg = <V extends ArgValue>(
  value: V,
  converter: (
    value: V,
    tools: {
      markVariableId: (v: VariableId) => string;
      markSwitchId: (v: SwitchId) => string;
      markFromTo: (v: FromTo) => string;
      markPreset: <P extends Record<string, string>>(
        value: keyof P,
        preset: P
      ) => string;
      markMapPosition: (v: MapPosition, mode: DirectOrVariables) => string;
      markSoundArgs: (v: Sound) => string;
      markColorTone: (v: Color3 | Color4) => string;
      markColorArgs: (v: Color3 | Color4) => string;
      //
      validInt: (v: number) => number;
      validRange: (v: number, min: number, max: number) => number;
      validOne: (v: number) => number;
      validId: (v: number) => number;
      //
      isVariableId: (v: unknown) => v is VariableId;
      isSwitchId: (v: unknown) => v is SwitchId;
      isFromTo: (v: unknown) => v is FromTo;
      isMapPosition: (v: unknown) => v is MapPosition;
      isSound: (v: unknown) => v is Sound;
      isColor: (v: unknown) => v is Color3 | Color4;
    }
  ) => string | number | boolean
): string => {
  const validInt = (v: number) => {
    if (v % 1 !== 0) {
      throw new Error(`値は整数である必要があります。`);
    }
    return v;
  };
  const range = (v: number, min: number, max: number) => {
    if (!(min <= v && v <= max)) {
      throw new Error(`値は ${min} ～ ${max} の間の値である必要があります。`);
    }
    return v;
  };
  const validOne = (v: number) => range(validInt(v), 1, Infinity);
  return `${converter(value, {
    markVariableId: (v) => `V[${v.variableId}]`,
    markSwitchId: (v) => `SW[${v.switchId}]`,
    markFromTo: (v) => `${v.from}-${v.to}`,
    markPreset: (v, p) => p[v],
    markMapPosition: (v, mode) =>
      `${mode === "DIRECT" ? "Direct" : "WithVariables"}[${v.id}][${v.x}][${
        v.y
      }]`,
    markSoundArgs: (v) =>
      joinKeep(null, [v.name ?? "None", v.volume, v.pitch, v.pan]),
    markColorTone: (v) =>
      `ColorTone[${v.r}][${v.g}][${v.b}]${
        (v as Color4)?.x ? `[${(v as Color4).x}]` : ""
      }`,
    markColorArgs: (v) => joinSkip(null, [v.r, v.g, v.b, (v as Color4)?.x]),
    //
    validInt,
    validRange: (v, min, max) => range(validInt(v), min, max),
    validOne,
    validId: validOne,
    //
    isVariableId: (v: unknown): v is VariableId => {
      if (typeof v === "number") return false;
      return !!(v as Partial<VariableId>)?.variableId;
    },
    isSwitchId: (v: unknown): v is SwitchId => {
      if (typeof v === "number") return false;
      return !!(v as Partial<SwitchId>)?.switchId;
    },
    isFromTo: (v: unknown): v is FromTo => {
      if (typeof v === "number") return false;
      return !!(v as Partial<FromTo>)?.from && !!(v as Partial<FromTo>)?.to;
    },
    isMapPosition: (v: unknown): v is MapPosition => {
      if (typeof v === "number") return false;
      return (
        !!(v as Partial<MapPosition>)?.id &&
        !!(v as Partial<MapPosition>)?.x &&
        !!(v as Partial<MapPosition>)?.y
      );
    },
    isSound: (v: unknown): v is Sound => {
      if (typeof v === "number") return false;
      return (
        !!(v as Partial<Sound>)?.name &&
        !!(v as Partial<Sound>)?.volume &&
        !!(v as Partial<Sound>)?.pitch &&
        !!(v as Partial<Sound>)?.pan
      );
    },
    isColor: (v: unknown): v is Color3 | Color4 => {
      if (typeof v === "number") return false;
      return (
        !!(v as Partial<Color4>)?.r &&
        !!(v as Partial<Color4>)?.g &&
        !!(v as Partial<Color4>)?.b
      );
    },
  })}`;
};

export const joinKeep = (delim: string | null, arr: (Text | undefined)[]) =>
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

export const argInt = (v: number) => arg(v, (v, t) => t.validInt(v));
export const argId = (v: number) => arg(v, (v, t) => t.validOne(v));
export const argEnemyIndex = (v: number) =>
  arg(v, (v, t) => t.validRange(v, 1, 8));

export const argPreset = <P extends Record<string, string>>(
  v: string,
  preset: P
) => arg(v, (v, t) => t.markPreset(v, preset));
export const argNumberPreset = <P extends Record<string, string>>(
  v: number | string,
  preset: P,
  isId?: boolean
) =>
  arg(v, (v, t) =>
    typeof v === "number"
      ? isId
        ? t.validId(v)
        : t.validInt(v)
      : t.markPreset(v, preset)
  );
export const argRange = (v: number, range: FromTo) =>
  arg(v, (v, t) => t.validRange(v, range.from, range.to));

export const createPresetArg = <P extends Record<string, string>>(
  preset: P
) => {
  return (v: ArgValue) =>
    arg(v, (v, t) =>
      typeof v === "number" ? t.validId(v) : t.markPreset(v as keyof P, preset)
    );
};

export const createPresetArgWithVariableId =
  <P extends Record<string, string>>(preset: P, range?: FromTo) =>
  (v: ArgValue) =>
    arg(v, (v, t) => {
      if (typeof v === "string")
        return t.markPreset(v as keyof typeof preset, preset);
      if (t.isVariableId(v)) return t.markVariableId(v);
      if (typeof v === "number") {
        if (range) t.validRange(v, range.from, range.to);
        return t.validId(v);
      }
      throw new Error("対応していない型が指定されました");
    });

export const argCharacterIdWithPreset = createPresetArg(CHARACTER);

export const argIntOrVariableId = (v: number | VariableId) =>
  arg(v, (v, t) => (t.isVariableId(v) ? t.markVariableId(v) : v));

export const argActorIdWithPreset = createPresetArgWithVariableId(ACTOR_MEMBER);

export const argEnemyIndexWithPreset =
  createPresetArgWithVariableId(ENEMY_MEMBER);
export const argEnemyIndexWithPresetAndVariableId =
  createPresetArgWithVariableId(ENEMY_MEMBER, { from: 1, to: 8 });
