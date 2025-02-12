import Webpack from "webpack";
import path from "path";
import { buildWebpack } from "./config/build/buildWebpack";
import type { BuildMode, BuildPath, Platform } from "./config/build/types";

export interface EnvVariables {
  mode: BuildMode;
  port: number;
  analyzer: boolean;
  platform?: Platform;
}

export default (env: EnvVariables) => {
  console.log("env", env);

  const paths: BuildPath = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    public: path.resolve(__dirname, "public"),
    src: path.resolve(__dirname, "./src"),
  };

  const config: Webpack.Configuration = buildWebpack({
    paths,
    mode: env.mode ?? "development",
    port: env.port ?? 3000,
    analyzer: env.analyzer,
    platform: env.platform ?? "browser",
  });

  return config;
};
