const kelvin = prompt('What is the Kelvin temperature today?');
const celsius = kelvin - 273;
var fahrenheit = Math.floor(celsius * (9/5) + 32);
console.log('The temperature is '+fahrenheit+' degrees fahrenheit.');