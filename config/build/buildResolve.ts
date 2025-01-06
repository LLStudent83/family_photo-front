import { Configuration } from "webpack";
import { BuildOptions } from "./types";

export function buildResolve(options: BuildOptions): Configuration["resolve"] {
  return {
    extensions: [".tsx", ".ts", ".js"],
  };
}
