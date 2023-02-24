module.exports = function reverse(n) {
    const reversed = parseInt(n.toString().split('').reverse().join(''));
    return Math.abs(n) >= 0 ? reversed : -reversed;
  };
  