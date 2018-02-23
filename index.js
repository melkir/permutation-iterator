'use strict';

function* permutationIterator(object) {
  if (object == null || object.length === 0) return;
  const keys = Object.keys(object);
  for (const indexes of permutate(keys)) {
    yield indexes.map(i => object[i]);
  }
}

// Heap's method, time complexity O(N)
function* permutate(array) {
  const { length } = array;
  const c = new Array(length).fill(0);
  let i = 1;

  yield array.slice();
  while (i < length) {
    if (c[i] < i) {
      const k = i % 2 && c[i];
      const p = array[i];
      array[i] = array[k];
      array[k] = p;
      ++c[i];
      i = 1;
      yield array.slice();
    } else {
      c[i] = 0;
      ++i;
    }
  }
}

module.exports = permutationIterator;
