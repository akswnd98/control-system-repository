const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.[hash].js',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname),
      '@/src': path.resolve(__dirname, 'src'),
      '@/assets': path.resolve(__dirname, 'assets'),
    },
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      }, {
        test: /\.(jpe?g|png|svg)$/i,
        exclude: /node_modules/,
        include: /assets\/images/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][name][ext]',
        },
      }, {
        test: /\.(ttf|otf)/i,
        exclude: /node_modules/,
        include: /assets\/fonts/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[hash][name][ext]',
        },
      }, {
        test: /\.(css)$/,
        use: [
          'style-loader',
          'css-loader',
        ],
        // exclude: /node_module/,
      }, {
        test: /\.(scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
        // exclude: /node_module/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 8080,
    historyApiFallback: true,
    proxy: {
      '/api/**': {
        target: 'http://localhost:11000',
        changeOrigin: true,
      },
    },
  },
};
