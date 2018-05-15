
//import alias from 'rollup-plugin-alias';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';
//import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
let builtInModules = require('builtin-modules');

let config = {
//  preferBuiltins: false,
//  browser: true,
  input: './src/browser.js',
  plugins: [
    nodeResolve({
      jsnext: true,
      main: false,
      browser: true,
    }),
    commonJS({
      include: [
        'node_modules/uniq/**',
        'node_modules/pouchdb-extend/**',
        'node_modules/argsarray/**',
        'node_modules/inherits/**',
        'node_modules/immediate/**',
        'node_modules/uuid/**',
        'node_modules/lie/**',
        ],
    }),
    babel({
      exclude: 'node_modules/**'
    }),
  ],
  output: [
  {
    file: './lib/index-browser.js',
    format: 'cjs',
  },
  ],
  external: [
//    'pouchdb-extend',
//    'uniq',
//    'clone-buffer',
//    'argsarray',
//    'inherits',
//    'uuid',
    'lie',
//    'immediate',

    //COPIED FROM pouchdb-find
//    'argsarray',
//    'buffer-from',
//    'clone-buffer',
//    'debug',
//    'double-ended-queue',
//    'fruitdown',
//    'immediate',
//    'inherits',
//    'level',
//    'level-codec',
//    'level-write-stream',
//    'leveldown',
//    'levelup',
//    'lie',
//    'localstorage-down',
//    'ltgt',
//    'memdown',
//    'readable-stream',
//    'request',
//    'spark-md5',
//    'through2',
//    'uuid',
//    'vuvuzela',
//    'websql',
//    'assert',
//    'async_hooks',
//    'buffer',
//    'child_process',
//    'cluster',
//    'console',
//    'constants',
//    'crypto',
//    'dgram',
//    'dns',
//    'domain',
//    'events',
//    'fs',
//    'http',
//    'http2',
//    'https',
//    'inspector',
//    'module',
//    'net',
//    'os',
//    'path',
//    'perf_hooks',
//    'process',
//    'punycode',
//    'querystring',
//    'readline',
//    'repl',
//    'stream',
//    'string_decoder',
//    'timers',
//    'tls',
//    'tty',
//    'url',
//    'util',
//    'v8',
//    'vm',
//    'zlib'
  ].concat(builtInModules),
};

export default config;
