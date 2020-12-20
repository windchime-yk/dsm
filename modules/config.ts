export const args = Deno.args;
export const [cmd] = args;
export const cwdSettingFile = `${Deno.cwd()}/dsm.config.ts`;
