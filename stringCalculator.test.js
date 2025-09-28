// stringCalculator.test.js
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

test('any amount of numbers', () => {
  expect(add('1,2,3,4,5')).toBe(15);
});

test('new lines between numbers are supported', () => {
  expect(add('1\n2,3')).toBe(6);
});

test('support custom single-char delimiter', () => {
  expect(add('//;\n1;2')).toBe(3);
});

test('support custom multi-char delimiter with brackets', () => {
  expect(add('//[***]\n1***2***3')).toBe(6);
});

test('support multiple delimiters', () => {
  expect(add('//[*][%]\n1*2%3')).toBe(6);
});

test('negative number throws with message including negative', () => {
  expect(() => add('-1')).toThrow(/negative numbers not allowed -1/);
});

test('multiple negatives included in message', () => {
  expect(() => add('2,-4,3,-5')).toThrow(/negative numbers not allowed -4,-5/);
});


