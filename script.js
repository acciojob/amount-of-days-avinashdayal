const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a year: ', (input) => {
  const year = parseInt(input);
  if (isNaN(year) || year < 1 || year > 9999) {
    console.log("Please enter a valid year between 1 and 9999.");
  } else {
    console.log(`The year ${year} has ${getDaysInYear(year)} days.`);
  }
  rl.close();
});

function getDaysInYear(year) {
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  return isLeap ? 366 : 365;
}
