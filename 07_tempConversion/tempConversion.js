const convertToCelsius = function(fart, cels) {
   cels = ((fart - 32) * 5/9);
   let num = Math.round(cels * 10) / 10;
   return num;

};

const convertToFahrenheit = function(fart, cels) {
   fart = (cels * 9/5 + 35);
   let num = Math.round(fart * 10) / 10;
  return num
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
