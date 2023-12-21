import { argInt, tag } from "../validate";

export const Wait = (time: number) => tag("Wait", [argInt(time)]);

export const Script = (code: string) => tag("Script", undefined, code);

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
