import webpack, { DefinePlugin } from "webpack";
import { BuildPaths } from "../build/types/config";
import path from "path";
import { buildCssLoader } from "../build/loaders/buildCssLoader";

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: "",
        html: "",
        entry: {
            bundle: ""
        },
        src: path.resolve(__dirname, "..", "..", "src")
    };
    config?.resolve?.modules?.unshift(paths.src);
    config?.resolve?.extensions?.push(".ts", ".tsx");
    if (config.module?.rules) {
        config.module.rules = config.module?.rules?.map((rule: any) => {
            if (rule !== "..." && /svg/.test(rule?.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }

            return rule;
        });
    }
    config?.module?.rules?.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
    });
    config?.module?.rules?.push(buildCssLoader(true));
    config?.plugins?.push(
        new DefinePlugin({
            __IS_DEV__: true,
            __API__: ""
        })
    );
    return config;
};
