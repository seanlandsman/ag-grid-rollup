import { nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss'

export default {
    input: './main-enterprise.js',
    output: {
        file: './dist/enterprise-bundle.js',
        format: 'umd',
    },
    plugins: [
        nodeResolve(),
        postcss({
            extract: true,
            extensions: [".css"]
        })
    ],
    onwarn: (msg, warn) => {
        if (msg.code === 'THIS_IS_UNDEFINED') return;
        if (!/Circular/.test(msg)) {
            warn(msg)
        }
    }
};
