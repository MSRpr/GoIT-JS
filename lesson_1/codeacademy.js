var currentTime = new Date();
var year = currentTime.getFullYear();
console.log(year-1969);

// Return today's date and time
var currentTime = new Date();

// returns the month (from 0 to 11)
var month = currentTime.getMonth() + 1;

// returns the day of the month (from 1 to 31)
var day = currentTime.getDate();

// returns the year (four digits)
var year = currentTime.getFullYear();

// write output MM/dd/yyyy
console.log(month + "/" + day + "/" + year);

