const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')

module.exports = {
  // 入口文件
  entry: './src/index.tsx',
  output: {
    filename: 'js/[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React项目模板',
      template: path.resolve(__dirname, '../public/index.html'),
      filename: './index.html',
      favicon: path.resolve(__dirname, '../public/icon.png')
    }),
    new DefinePlugin({
      'process.env': {
        ENV_TYPE: JSON.stringify(process.env.ENV_TYPE)
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]_[hash:base64:5]'
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(j|t)sx?$/,
        include: path.resolve(__dirname, '../src'),
        use: [
          // 'babel-loader',
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-react',
                ['@babel/preset-env', {
                  useBuiltIns: 'usage',
                  corejs: 3
                }],
                '@babel/preset-typescript'
              ]
            }
          },
          'ts-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'images/[name]-[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, '../src/'),
      '@assets': path.resolve(__dirname, '../src/assets/'),
      '@components': path.resolve(__dirname, '../src/components/'),
      '@layout': path.resolve(__dirname, '../src/layout/'),
      '@router': path.resolve(__dirname, '../src/router/'),
      '@utils': path.resolve(__dirname, '../src/utils/'),
      '@actions': path.resolve(__dirname, '../src/actions/'),
      '@reducers': path.resolve(__dirname, '../src/reducers/'),
      '@models': path.resolve(__dirname, '../src/models/'),
      '@pages': path.resolve(__dirname, '../src/pages/'),
      '@request': path.resolve(__dirname, '../src/request/'),
    }
  }
}