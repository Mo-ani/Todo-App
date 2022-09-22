const HtmlWebpackPlugin    = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin           = require("copy-webpack-plugin");
const HtmlMinimizerPlugin  = require("html-minimizer-webpack-plugin");
const CssMinimizerPlugin   = require("css-minimizer-webpack-plugin");
const TerserPlugin         = require("terser-webpack-plugin");


module.exports = {
    mode: 'development',
    
    output:{
        clean: true, // esto limpiara si se llega a crear uno o mas archivos. Index
        filename: '[name].[contenthash].js'
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
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
            }
        ]
    },

    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin(),
            new HtmlMinimizerPlugin(),
        ]
    },

    plugins: [new HtmlWebpackPlugin({
        filename: "index.html",
        title: "todo-app",
        template: "./src/index.html",
        inject: "body"
    }),
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
    }),   
    new CopyPlugin({
        patterns: [
          { from: "./src/assets/img", to: "assets/img" },
        ],
    }),
    ],
    
};