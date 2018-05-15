
//import alias from 'rollup-plugin-alias';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';
//import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
let builtInModules = require('builtin-modules');
let dependencies = Object.keys(require('./package.json').dependencies);
//import istanbul from 'rollup-plugin-istanbul';

let config = {
//  preferBuiltins: false,
//  browser: true,
  input: './src/index.js',
  plugins: [
//    istanbul({
//      exclude: ['test/*.js', 'node_modules/**/*']
//    }),
    nodeResolve({
      jsnext: true,
      main: false,
      browser: true,
    }),
//    commonJS({
//      include: [
//        'node_modules/uniq/**',
//        'node_modules/pouchdb-extend/**',
//        'node_modules/argsarray/**',
//        'node_modules/inherits/**',
//        'node_modules/immediate/**',
//        'node_modules/uuid/**',
//        'node_modules/lie/**',
//        ],
//    }),
//    babel({
//      exclude: 'node_modules/**'
//    }),
  ],
  output: [
  {
    file: './lib/index.js',
    format: 'cjs',
  },
  ],
  external: dependencies,
};

export default config;
