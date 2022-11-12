import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel'
import typeScript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import terser from '@rollup/plugin-terser';

const config = defineConfig({
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/bundle.iife.js',
      format: 'iife',
      name: 'Tun',
    }
  ],
  external: ['react'],
  plugins: [
    typeScript(),
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      exclude:'node_modules/**'
    }),
    terser(),
    postcss({
      plugins: [  
        autoprefixer(),
      ],
      // extract: 'css/index.css',
    }),
  ]
});

export default config;
