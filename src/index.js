module.exports = function reverse (n) {
  const arr = Array.from('' + Math.abs(n));
  return Number(arr.reverse().join(''));
}
