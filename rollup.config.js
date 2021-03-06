import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: './index.js',
  output: {
    file: './dist/rollup-bundle.js',
    format: 'es'
  },
  plugins: [
    babel({
      include: 'src/**/*.*'
    }),
    resolve(),
    commonjs()
  ]
}
