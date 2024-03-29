module.exports = {
    entry: './app.js',
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|css)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env']
            }
          }
        }
      ]
    }
  }