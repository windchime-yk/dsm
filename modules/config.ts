import { resolve } from "path";
import type { GithubRelease } from "../model.ts";

export const args = Deno.args;
export const [cmd] = args;
export const settingFile = "dsm.config.ts";
export const cwdSettingFile = resolve(Deno.cwd(), settingFile);
export const version = async (): Promise<string | undefined> => {
  const res = await fetch(
    "https://api.github.com/repos/windchime-yk/dsm/releases",
  );
  const releases: GithubRelease[] = await res.json();
  return releases[0].tag_name;
};
