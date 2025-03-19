import Webpack from "webpack";
import path from "path";
import { buildWebpack } from "@packages/build-config";
import packageJson from "./package.json";
import type { BuildMode, Platform, BuildPath } from "@packages/build-config";

export interface EnvVariables {
  mode: BuildMode;
  port: number;
  analyzer: boolean;
  platform?: Platform;
}

export default (env: EnvVariables) => {
  console.log("env", env);

  const paths: BuildPath = {
    entry: path.resolve(__dirname, "src", "app", "index.tsx"),
    output: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    public: path.resolve(__dirname, "public"),
    src: path.resolve(__dirname, "./src"),
  };

  const config: Webpack.Configuration = buildWebpack({
    paths,
    mode: env.mode ?? "development",
    port: env.port ?? 3001,
    analyzer: env.analyzer,
    platform: env.platform ?? "browser",
  });

  config.plugins.push(
    new Webpack.container.ModuleFederationPlugin({
      name: "show",
      filename: "remoteEntry.js",
      exposes: {
        "./Router": "./src/app/router/Router.tsx",
      },
      shared: {
        ...packageJson.dependencies,
        react: {
          eager: true,
          requiredVersion: packageJson.dependencies["react"],
        },
        "react-router-dom": {
          eager: true,
          requiredVersion: packageJson.dependencies["react-router-dom"],
        },
        "react-dom": {
          eager: true,
          requiredVersion: packageJson.dependencies["react-dom"],
        },
      },
    })
  );

  return config;
};
