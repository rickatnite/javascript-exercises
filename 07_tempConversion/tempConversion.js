const convertToCelsius = function(temp) {
  let far = temp;
  let cel = (far - 32) * (5/9);
  let celsius = Math.round(cel * 10) / 10;
  return celsius;
};

const convertToFahrenheit = function(temp) {
  let cel = temp;
  let far = (cel * (9/5) + 32);
  let fahrenheit = Math.round(far * 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
