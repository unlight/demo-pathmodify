demo-pathmodify
---------------

[![Greenkeeper badge](https://badges.greenkeeper.io/unlight/demo-pathmodify.svg)](https://greenkeeper.io/)
Demo repository for [pathmodify#7](https://github.com/jmm/pathmodify/issues/7)  

INSTALL
-------
`npm i`

USAGE
-----
`node browserify.js`

RESULTS
-------
```js
{"~/test1.js":undefined}
```
Expecting:
```js
{"~/test1.js": ... 'test1 content' ... }
```