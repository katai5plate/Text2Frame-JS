import { CHARACTER, LOCATION } from "../constants";
import { C, VariableId } from "../type";
import { arg, argId, argPreset, argRange, tag } from "../validate";

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

export const GetLocationInfo: C<{
  id: VariableId;
  layer: keyof typeof LOCATION;
  position:
    | { x: number; y: number }
    | { x: VariableId; y: VariableId }
    | keyof typeof CHARACTER
    | number;
}> = ({ id, layer, position }) =>
  tag("GetLocationInfo", [
    arg(id, (v, t) => t.isVariableId(v)),
    argPreset(layer, LOCATION),
    arg(position, (v, t) => {
      if (typeof v === "object")
        return `${t.isVariableId(v.x) ? "WithVariables" : "Direct"}[${v.x}][${
          v.y
        }]`;
      if (typeof v === "string") return t.markPreset(v, CHARACTER);
      return v;
    }),
  ]);
