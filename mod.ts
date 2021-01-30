import { isExistFileSync } from "util";
import {
  existConfigWarn,
  initDsm,
  printHelp,
  printVersion,
  runCommand,
} from "./modules/runCmd.ts";
import { cmd, cwdSettingFile } from "./modules/config.ts";

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
