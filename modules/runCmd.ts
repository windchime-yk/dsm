import { exec } from "exec";
import { yellow, red } from "colors";
import type { GithubRelease } from "../model.ts";
import { cmd, cwdSettingFile, settingFile } from "./config.ts";
import { importConfig } from "./importConfig.ts";

export const initDsm = async (): Promise<void> => {
  await Deno.copyFile("./modules/template.ts", cwdSettingFile);
};

export const existConfigWarn = (): void => {
  console.warn(`${yellow("WARN")} exist config file.`);
};

const version = async (): Promise<string | undefined> => {
  const res = await fetch(
    "https://api.github.com/repos/windchime-yk/dsm/releases"
  );
  const releases: GithubRelease[] = await res.json();
  return releases[0].tag_name;
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
    const cmdData = script!.cmd
    exec(cmdData)
  } catch (err) {
    console.error(
      `${red("ERR!!")} There are no commands in the configuration file.`
    );
  }
};
