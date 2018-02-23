import test from 'ava';
import iterable from '.';

const output = [
  ['a', 'b', 'c'],
  ['b', 'a', 'c'],
  ['c', 'a', 'b'],
  ['a', 'c', 'b'],
  ['b', 'c', 'a'],
  ['c', 'b', 'a'],
];

test('array', t => {
  const it = iterable(['a', 'b', 'c']);
  t.deepEqual([...it], output);
});

test('object', t => {
  const it = iterable({ 1: 'a', 2: 'b', 3: 'c' });
  t.deepEqual([...it], output);
});

test('empty array', t => {
  const it = iterable([]);
  t.deepEqual(it.next(), { done: true, value: undefined });
});

test('null', t => {
  const it = iterable(null);
  t.true(it.next().done);
});
