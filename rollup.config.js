import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript';

export default {
  entry: 'src/main.ts',
  format: 'iife',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    typescript()
  ],
  dest: 'dist/bundle.js'
};