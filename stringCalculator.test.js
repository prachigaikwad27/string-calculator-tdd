const { add } = require('./stringCalculator');

test('empty string returns 0', () => {
  expect(add('')).toBe(0);
});

test('single number returns value', () => {
  expect(add('1')).toBe(1);
});

test('two numbers comma separated', () => {
  expect(add('1,5')).toBe(6);
});

test('new lines between numbers are supported', () => {
  expect(add('1\n2,3')).toBe(6);
});

