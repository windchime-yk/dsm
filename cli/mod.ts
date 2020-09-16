import { exec, isExistFileSync, writeFile, readFile, yellow, red } from "./utils/deps.ts"

const [ cmd ] = Deno.args
const cwdSettingFile = `${Deno.cwd()}/deno-scripts.json`
const version = 'v0.0.0'

if (cmd === 'init' && !isExistFileSync(cwdSettingFile)) {
  const sampleData = {
    "version:deno": "deno -V"
  }
  await writeFile(JSON.stringify(sampleData), cwdSettingFile)
} else if (cmd === 'init' && isExistFileSync(cwdSettingFile)) {
  console.warn(`${yellow('WARN')} exist config file.`);
} else if (['-v', 'version'].includes(cmd)) {
  console.log(version);
} else if (['-h', 'help'].includes(cmd)) {
  console.log(`
  dsm ${version}

  Usage:
  dsm [command]

  Command:
  -v, version : Show version
  -h, help    : Show help
  Other       : Activate the command that matches the text you entered.
  `)
} else {
  try {
    const scriptData = await readFile(cwdSettingFile)
    await exec(JSON.parse(scriptData)[cmd])
  } catch (err) {
    console.error(`${red('ERR!!')} There are no commands in the configuration file.`)
  }
}
