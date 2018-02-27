module.exports = function getZerosCount(number) {
  var counter = 0;
  for (var i = 5; i <= number; i *= 5) {
    counter += Math.floor(number / i);
  };
  return counter;
}
