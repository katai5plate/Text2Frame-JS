import { C } from "../type";
import { argInt, tag } from "../validate";

export const Wait: C<{ time: number }> = ({ time }) =>
  tag("Wait", [argInt(time)]);

export const Script: C<{
  code: string[];
}> = ({ code }) => tag("Script", undefined, code);

export const PluginCommandMV: C<{
  command: string;
}> = ({ command }) => tag("PluginCommand", [command]);

export const PluginCommandMZ: C<{
  name: string;
  method: string;
  command: string;
  args: { name: string; value: any }[];
}> = ({ name, method, command, args }) =>
  tag("PluginCommandMZ", [
    name,
    method,
    command,
    ...args.map((x) => `${x.name}[${x.value}]`),
  ]);
