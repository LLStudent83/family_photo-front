import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types";

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
  const isDev = options.mode === "development";

  const assetsLoader = {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoaderWithModules = {
    loader: "css-loader",
    options: {
      modules: {
        namedExport: false,
        localIdentName: isDev
          ? "[path][name]__[local]--[hash:base64:8]"
          : "[hash:base64:8]",
      },
    },
  };

  const scssLoader = {
    test: /\.scss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      cssLoaderWithModules,
      "sass-loader",
    ],
  };
  return [tsLoader, scssLoader, assetsLoader];
}
