import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

export default defineConfig({
  treeshake: false,
  input: 'src/index.ts',
  plugins: [
    resolve({
      extensions: ['.ts', '.js'],
    }),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.ts', '.js'],
    }),
    // terser(),
  ],
  output: [
    {
      minifyInternalExports: false,
      format: 'es',
      dir: 'es',
      entryFileNames: '[name].js',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
    {
      format: 'cjs',
      dir: 'cjs',
      entryFileNames: '[name].js',
      preserveModules: true,
      preserveModulesRoot: 'src',
    }
  ],
});
