import type { DsmConfig } from "../model.ts";

const config: DsmConfig = {
  scripts: {
    "version:deno": {
      cmd: "deno -V",
      desc: "print deno version",
    },
  },
};

export default config;
