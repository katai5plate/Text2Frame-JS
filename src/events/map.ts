import { CHARACTER, LOCATION } from "../constants";
import { VariableId } from "../type";
import {
  argId,
  argPreset,
  argRange,
  argVariableId,
  tag,
  typeCase,
} from "../validate";

export const ChangeMapNameDisplay = (allow: boolean) =>
  tag("ChangeMapNameDisplay", [allow]);

export const ChangeTileset = (id: number) => tag("ChangeTileset", [argId(id)]);

export const ChangeBattleBackGround = (images: [string?, string?]) =>
  tag("ChangeBattleBackGround", [images[0] ?? "None", images[1] ?? "None"]);

export const ChangeParallax = (
  name: string,
  scroll: { x?: number; y?: number }
) =>
  tag("ChangeParallax", [
    name,
    scroll.x &&
      `LoopHorizontally[${argRange(scroll.x, { from: -32, to: 32 })}]`,
    scroll.y && `LoopVertically[${argRange(scroll.y, { from: -32, to: 32 })}]`,
  ]);

type PositionType = { x: number; y: number } | { x: VariableId; y: VariableId };
export const GetLocationInfo = (
  variableId: number,
  layer: keyof typeof LOCATION,
  position: PositionType | keyof typeof CHARACTER | number
) =>
  tag("GetLocationInfo", [
    argId(variableId),
    argPreset(layer, LOCATION),
    typeCase(position, {
      object: (value, e) => {
        const v = value as PositionType;
        if ("x" in v && "y" in v) {
          if (typeof v.x === "number") return `Direct[${v.x}][${v.y}]`;
          if (v.x.variableId) return `WithVariables[${v.x}][${v.y}]`;
        }
        throw e();
      },
    }),
  ]);
