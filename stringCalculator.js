function add(numbers) {
  if (numbers === '' || numbers === undefined || numbers === null) return 0;
  // split by comma or newline
  const parts = numbers.split(/,|\n/).filter(Boolean);
  const nums = parts.map(p => Number(p));
  return nums.reduce((s, n) => s + (Number.isNaN(n) ? 0 : n), 0);
}

module.exports = { add };
