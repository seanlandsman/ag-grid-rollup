
`npm install`

`./node_modules/.bin/rollup main.js -f umd -o rolled-up-bundle.js -c rollup.config.js`
...would be `npm run rollup`, but see https://github.com/rollup/rollup/issues/2341

`npm run serve`



open browser - check logs

Success would be "imported ag grid XXXX" in the console.

What will actually happen is you'll get the following error:

`Uncaught TypeError: Cannot read property 'GridOptionsWrapper' of undefined`

This is due to cyclic dependencies - rollup cannot resolve these successfully.


