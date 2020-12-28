import { exec } from "exec";
import { red, yellow } from "colors";
import { cmd, cwdSettingFile, settingFile, version } from "./config.ts";
import { importConfig } from "./importConfig.ts";

export const initDsm = async (): Promise<void> => {
  await Deno.copyFile("./modules/template.ts", cwdSettingFile);
};

export const existConfigWarn = (): void => {
  console.warn(`${yellow("WARN")} exist config file.`);
};

export const printVersion = async (): Promise<void> => {
  console.log(await version());
};

export const printHelp = async (): Promise<void> => {
  console.log(`
  dsm ${await version()}

  Usage:
  dsm [command]

  Command:
  -v, version : Show version
  -h, help    : Show help
  Other       : Activate the command that matches the text you entered.
  `);
};

export const runCommand = async (): Promise<void> => {
  try {
    const configData = await importConfig(settingFile);
    const script = configData?.scripts[cmd];
    const cmdData = script!.cmd;
    exec(cmdData);
  } catch (err) {
    console.error(
      `${red("ERR!!")} There are no commands in the configuration file.`,
    );
  }
};
