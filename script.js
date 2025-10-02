function getDaysInYear(year) {
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  return isLeap ? 366 : 365;
}

// Ask user for input
let input = prompt("Enter a year:");
let year = parseInt(input);

// Validate year
if (isNaN(year) || year < 1 || year > 9999) {
  alert("Please enter a valid year between 1 and 9999.");
} else {
  alert(getDaysInYear(year));
}
