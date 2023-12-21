import { CHARACTER, LOCATION } from "../constants";
import { C, VariableId } from "../type";
import {
  argId,
  argPreset,
  argRange,
  argVariableId,
  tag,
  typeCase,
} from "../validate";

export const ChangeMapNameDisplay: C<{
  allow: boolean;
}> = ({ allow }) => tag("ChangeMapNameDisplay", [allow]);

export const ChangeTileset: C<{
  id: number;
}> = ({ id }) => tag("ChangeTileset", [argId(id)]);

export const ChangeBattleBackGround: C<{ images: [string?, string?] }> = ({
  images,
}) => tag("ChangeBattleBackGround", [images[0] ?? "None", images[1] ?? "None"]);

export const ChangeParallax: C<{
  name: string;
  scroll: { x?: number; y?: number };
}> = ({ name, scroll }) =>
  tag("ChangeParallax", [
    name,
    scroll.x &&
      `LoopHorizontally[${argRange(scroll.x, { from: -32, to: 32 })}]`,
    scroll.y && `LoopVertically[${argRange(scroll.y, { from: -32, to: 32 })}]`,
  ]);

type PositionType = { x: number; y: number } | { x: VariableId; y: VariableId };
export const GetLocationInfo: C<{
  id: VariableId;
  layer: keyof typeof LOCATION;
  position: PositionType | keyof typeof CHARACTER | number;
}> = ({ id, layer, position }) =>
  tag("GetLocationInfo", [
    argVariableId(id),
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
