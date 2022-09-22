const HtmlWebpackPlugin    = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin           = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',

    output:{
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    // Disables attributes processing
                    sources: false,
                  },
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
            },
        ]
    },

    optimization: {},


    plugins: [new HtmlWebpackPlugin({
        filename: "index.html",
        title: "todo-app",
        template: "./src/index.html",
        inject: "body"
    }),
    new MiniCssExtractPlugin({
        filename: '[name].css',
    }),   
    new CopyPlugin({
        patterns: [
          { from: "./src/assets/img", to: "assets/img" },
        ],
    }),
    ],
    
};