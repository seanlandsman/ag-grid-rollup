
npm install
npm run rollup
npm serve

open browser - check logs

Success would be "imported ag grid XXXX" in the console.

What will actually happen is you'll get the following error:

Uncaught TypeError: Cannot read property 'GridOptionsWrapper' of undefined

This is due to cyclic dependencies - rollup cannot resolve these successfully.

