import { argInt, tag } from "../validate";
import * as rmmzGlobal from "../globalThis";

export const Wait = (time: number) => tag("Wait", [argInt(time)]);

export const Script = (code: (globalThis: typeof rmmzGlobal) => unknown) => {
  const match = code.toString().match(/\{([\s\S]*)\}/);
  return tag("Script", undefined, match ? match[1].trim() : "");
};

export const PluginCommandMV = (command: string) =>
  tag("PluginCommand", [command]);

export const PluginCommandMZ = (
  name: string,
  method: string,
  command: string,
  args: { name: string; value: any }[]
) =>
  tag("PluginCommandMZ", [
    name,
    method,
    command,
    ...args.map((x) => `${x.name}[${x.value}]`),
  ]);
