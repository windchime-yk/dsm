import { DenonConfig } from "https://deno.land/x/denon@2.4.4/mod.ts";

const config: DenonConfig = {
  scripts: {
    init: {
      cmd: "deno run mod.ts init",
      desc: "init dsm config file",
      allow: ["run", "read", "write"],
      watch: false,
      unstable: true,
      importmap: "./import_map.json",
    },
    denoversion: {
      cmd: "deno run mod.ts version:deno",
      desc: "print deno version",
      allow: ["run", "read", "write"],
      watch: false,
      unstable: true,
      importmap: "./import_map.json",
    }
  },
};

export default config;
