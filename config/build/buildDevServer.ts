import path from "path";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types";

export function buildDevServer({ port }: BuildOptions): DevServerConfiguration {
  return {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: port ?? 3000,
    historyApiFallback: true,
  };
}
