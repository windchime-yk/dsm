import { resolve } from "path";
import { DsmConfig } from "../model.ts";

export const importConfig = async (
  file: string,
): Promise<DsmConfig | undefined> => {
  try {
    const configRaw = await import(`file://${resolve(file)}`);
    return configRaw.default as DsmConfig;
  } catch (err) {
    console.error(err);
    return;
  }
};
