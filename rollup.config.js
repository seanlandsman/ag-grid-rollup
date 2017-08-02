let commonjs = require('rollup-plugin-commonjs');
let nodeResolve = require('rollup-plugin-node-resolve');

export default {
    entry: 'main.js',
    dest: 'rolled-up-bundle.js',
    format: 'cjs',
    plugins: [
        nodeResolve({jsnext: true, module: true}),
        commonjs(
            {
                include: [
                    'node_modules/rxjs/**',
                    'node_modules/ag-grid/**',
                    'node_modules/ag-grid-angular/**'
                ],
                namedExports: {
                    'node_modules/ag-grid-angular/main.js': ['AgGridModule']
                }
            }
        )
    ]
};