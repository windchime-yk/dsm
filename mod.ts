import { exec } from "exec";
import { readFile, writeFile, isExistFileSync } from "util";
import { yellow, red } from "colors";
import { GithubRelease } from "./model.ts";

const [cmd] = Deno.args;
const cwdSettingFile = `${Deno.cwd()}/deno-scripts.json`;
const version = async (): Promise<any> => {
  const res = await fetch('https://api.github.com/repos/windchime-yk/dsm/releases')
  const releases: GithubRelease[] = await res.json()
  return releases[0].tag_name
}

const initDsm = async (): Promise<void> => {
  const sampleData = {
    "version:deno": "deno -V",
  };
  await writeFile(JSON.stringify(sampleData), cwdSettingFile);
};

const existConfigWarn = (): void => {
  console.warn(`${yellow("WARN")} exist config file.`);
}

const printVersion = async (): Promise<void> => {
  console.log(await version());
};

const printHelp =  async (): Promise<void> => {
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

const runCommand = async (): Promise<void> => {
  try {
    const scriptData = await readFile(cwdSettingFile);
    await exec(JSON.parse(scriptData)[cmd]);
  } catch (err) {
    console.error(
      `${red("ERR!!")} There are no commands in the configuration file.`
    );
  }
};

if (cmd === "init" && !isExistFileSync(cwdSettingFile)) {
  initDsm();
} else if (cmd === "init" && isExistFileSync(cwdSettingFile)) {
  existConfigWarn();
} else if (["-v", "version"].includes(cmd)) {
  printVersion();
} else if (["-h", "help"].includes(cmd)) {
  printHelp();
} else {
  runCommand();
}
