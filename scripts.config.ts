import { DenonConfig } from "https://deno.land/x/denon@2.4.4/mod.ts";

const config: DenonConfig = {
  scripts: {
    init: {
      cmd: "deno run mod.ts init",
      desc: "init dsm config file",
      allow: ["net", "run", "read", "write"],
      watch: false,
      unstable: true,
      importmap: "./import_map.json",
    },
    denoversion: {
      cmd: "deno run mod.ts version:deno",
      desc: "print deno version",
      allow: ["net", "run", "read", "write"],
      watch: false,
      unstable: true,
      importmap: "./import_map.json",
    },
    version: {
      cmd: "deno run mod.ts -v",
      desc: "print deno version",
      allow: ["net", "run", "read", "write"],
      watch: false,
      unstable: true,
      importmap: "./import_map.json",
    },
    help: {
      cmd: "deno run mod.ts -h",
      desc: "print deno version",
      allow: ["net", "run", "read", "write"],
      watch: false,
      unstable: true,
      importmap: "./import_map.json",
    }
  },
};

export default config;
