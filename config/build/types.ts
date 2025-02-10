export interface BuildPath {
  entry: string;
  html: string;
  output: string;
  src: string;
}

export type BuildMode = "production" | "development";
export type Platform = "mobile" | "browser";

export interface BuildOptions {
  port: number;
  paths: BuildPath;
  mode: BuildMode;
  analyzer?: boolean;
  platform?: Platform;
}
