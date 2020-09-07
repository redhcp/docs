const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        theme: ["./assets/js/theme.debug.js", "./_sass/index.scss"]
    },
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, "assets"),
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
        }, {
            test: /\.js$/,
            use: {
                loader: "babel-loader",
                options: { presets: ["@babel/preset-env"] }
            }
        }]
    },
    plugins: [new MiniCssExtractPlugin({ filename: "css/[name].css" })]
};