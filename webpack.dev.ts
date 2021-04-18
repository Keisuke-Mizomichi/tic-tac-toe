/* eslint-disable @typescript-eslint/no-explicit-any */
import path from 'path';
import merge from 'webpack-merge';
import common from './webpack.common';

export default merge(
  common,
  {
    mode: 'development',
    devtool: 'inline-source-map',
  },
  {
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      host: 'localhost',
      port: 8080,
    },
  } as any
);
