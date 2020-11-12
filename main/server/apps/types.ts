export type AppName = "Dasher" | "PlainText";

export abstract class AAppDataGetters {
  abstract doesExist(): Promise<boolean>;
  abstract getHash(): Promise<string>;
  abstract getText(): Promise<string>;
  abstract getName(): AppName;
  abstract getPath(): Promise<string>;
}
