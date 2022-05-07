process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ModularRocks = require('@modular-rocks/webpack')

let opts = {
  factories: ['pages', 'components', '*events', 'sections', 'actions', 'data'],
  regex: /\.jsx?$/,
  configUrl: '/src/config/modular-rocks-config.js'
}

const hook = new ModularRocks.Hook({...opts, path: '/src', app: 'app'})

module.exports = {
  watch: true,
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js",
    // clean: true
  },
  devServer: {
    compress: true,
    port: 9000,
    static: "./dist",
    historyApiFallback: true
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              ['@babel/react', {}],
              ["@babel/preset-env", {
                "modules": false,
                "targets": {
                  "browsers": "> 1%",
                  "node": "current"
                },
                "useBuiltIns": 'entry',
                "corejs": "core-js@3",
                'forceAllTransforms': true
              }]
            ],
            "compact" : true,
            "plugins": [
              "@babel/syntax-dynamic-import",
              '@babel/plugin-proposal-object-rest-spread',
              ["transform-class-properties", { "spec": true }]
            ]
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    hook
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.sass'],
    fallback: {
        "fs": false,
        "path": require.resolve("path-browserify")
    },
  }
}
