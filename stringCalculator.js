// stringCalculator.js
function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function parseDelimiters(header) {
  // header can be like ";" or "[***]" or "[*][%]"
  if (!header) return [];
  if (header.startsWith('[')) {
    const matches = [...header.matchAll(/\[([^\]]+)\]/g)];
    return matches.map(m => m[1]);
  }
  return [header];
}

function add(numbers) {
  if (numbers === '' || numbers === undefined || numbers === null) return 0;

  let payload = numbers;
  let delimiters = [',', '\n']; // default

  // Check for custom delimiter header: //... \n
  if (numbers.startsWith('//')) {
    const headerMatch = numbers.match(/^\/\/(.+)\n/);
    if (headerMatch) {
      const header = headerMatch[1];
      const parsed = parseDelimiters(header);
      if (parsed.length) {
        delimiters = parsed.concat(['\n']); // keep newline available
      } else {
        delimiters = [header];
      }
      payload = numbers.slice(headerMatch[0].length);
    }
  }

  const splitter = new RegExp(delimiters.map(escapeRegExp).join('|'), 'g');
  const parts = payload.split(splitter).filter(s => s !== '');
  const nums = parts.map(p => Number(p));
  const negatives = nums.filter(n => n < 0);

  if (negatives.length > 0) {
    throw new Error('negative numbers not allowed ' + negatives.join(','));
  }

  const sum = nums.reduce((acc, n) => acc + (Number.isNaN(n) ? 0 : n), 0);
  return sum;
}

module.exports = { add };
