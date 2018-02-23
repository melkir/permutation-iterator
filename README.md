# permutation-iterator [![Build Status](https://travis-ci.org/melkir/permutation-iterator.svg?branch=master)](https://travis-ci.org/melkir/permutation-iterator) [![codecov](https://codecov.io/gh/melkir/permutation-iterator/branch/master/graph/badge.svg)](https://codecov.io/gh/melkir/permutation-iterator)

> Iterate by permutations in a list

[![permutation][picture]](https://en.wikibooks.org/wiki/Probability/Combinatorics)

## Install

```
$ npm install permutation-iterator
```

## Usage

### Array

```js
const permutationIterator = require('permutation-iterator');

const it = permutationIterator(['a', 'b', 'c']);

it.next(); // => { value: ['a', 'b', 'c'], done: false }
it.next(); // => { value: ['b', 'a', 'c'], done: false }
it.next(); // => { value: ['c', 'a', 'b'], done: false }
it.next(); // => { value: ['a', 'c', 'b'], done: false }
it.next(); // => { value: ['b', 'c', 'a'], done: false }
it.next(); // => { value: ['c', 'b', 'a'], done: false }
it.next(); // => { value: undefined, done: true }
```

### Object

```js
const it = permutationIterator({
  1: 'a',
  2: 'b',
  3: 'c'
});

// Same bahavior as arrays
it.next(); // => { value: ['a', 'b', 'c'], done: false }
```


## License

MIT © Thibaut Vieux

[picture]: https://upload.wikimedia.org/wikipedia/commons/7/79/Permutation.png
