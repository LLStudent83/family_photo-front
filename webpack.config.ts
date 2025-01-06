import Webpack from "webpack";
import path from "path";
import { buildWebpack } from "./config/build/buildWebpack";
import { BuildMode, BuildPath } from "./config/build/types";

export interface EnvVariables {
  mode: BuildMode;
  port: number;
}

export default (env: EnvVariables) => {
  const paths: BuildPath = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  const config: Webpack.Configuration = buildWebpack({
    paths,
    mode: env.mode ?? "development",
    port: env.port ?? 3000,
  });

  return config;
};
