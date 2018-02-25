module.exports = function getZerosCount(number) {
  var baseCounter = 0, countOfRepetitions = 0;
  for(var i = 5; i <= number; i *= 5) {
    countOfRepetitions++;
    for(var j = 0; j <= number; j += i) {
      baseCounter++;
    };
  };
  return baseCounter - countOfRepetitions;
}
