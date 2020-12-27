import { resolve } from "path";

export const args = Deno.args;
export const [cmd] = args;
export const settingFile = "dsm.config.ts";
export const cwdSettingFile = resolve(Deno.cwd(), settingFile);
