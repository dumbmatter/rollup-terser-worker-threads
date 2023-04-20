import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import * as rollup from "rollup";

export const makeBundle = async () => {
    const bundle = await rollup.rollup({
        input: 'src/main.js',
        plugins: [
            resolve(),
            commonjs(),
            terser()
        ]
    });

    await bundle.write({
        file: 'public/bundle.js',
        format: 'iife', // immediately-invoked function expression — suitable for <script> tags
        sourcemap: true
    });
};
