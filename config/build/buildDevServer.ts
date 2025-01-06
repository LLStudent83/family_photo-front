import path from "path";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: options.port ?? 8000,
  };
}
