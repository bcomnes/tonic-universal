# tonic-universal
[![latest version](https://img.shields.io/npm/v/tonic-universal.svg)](https://www.npmjs.com/package/tonic-universal)
[![Actions Status](https://github.com/bcomnes/tonic-universal/workflows/tests/badge.svg)](https://github.com/bcomnes/tonic-universal/actions)
[![Coverage Status](https://coveralls.io/repos/github/bcomnes/tonic-universal/badge.svg?branch=master)](https://coveralls.io/github/bcomnes/tonic-universal?branch=master)
[![downloads](https://img.shields.io/npm/dm/tonic-universal.svg)](https://npmtrends.com/tonic-universal)


Isomorphic exports of [@socketsupply/tonic][tonic]

```
npm install tonic-universal
```

## Usage

Use [@socketsupply/tonic][tonic] or [tonic-ssr][ssr] from a single import identifier depending on then environment you are running.

``` js
// Shared codepaths between node and the browser.
import Tonic from 'tonic-universal'

class MyGreeting extends Tonic {
  render () {
    return this.html`<div>Hello, World.</div>`
  }
}

Tonic.add(MyGreeting, 'my-greeting')
```

## How

`tonic-universal` works by utilizing environment specific exports fields so that you can have dependency injection at the built-in module resolver layer.
It supports the following export fields:

- `main` (cjs node)
- ~~`browser` (cjs browser)~~ TODO: Release a dual pacakge `@socketsupply/tonic` to suppor this.
- `exports.import` (esm node)
- `exports.reqire` (cjs node)
- `exports.browser` (esm browser)

## License

MIT

[tonic]: https://github.com/socketsupply/tonic
[ssr]: https://github.com/socketsupply/tonic-ssr
