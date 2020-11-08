const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, './src'), //어떤 파일을 기준으로 할 것인가?
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
  }, //빌드된 결과물을 어디로 내보낼것인가?
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
}

//webpack 파일을 모아주는 것
