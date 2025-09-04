const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to return days in a given year
function days_of_a_year(year) {
  return isLeapYear(year) ? 366 : 365;
}

// Function to check leap year
function isLeapYear(year) {
  return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

// Take input
rl.question(' ', (input) => {
  const year = parseInt(input);
  console.log(` ${year}: ${days_of_a_year(year)}`);
  rl.close();
});
