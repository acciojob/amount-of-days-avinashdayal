rl.question('Enter a year: ', (input) => {
  const year = parseInt(input);
  if (isNaN(year) || year < 1 || year > 9999) {
    console.log("Please enter a valid year between 1 and 9999.");
  } else {
    console.log(`The year ${year} has ${days_of_a_year(year)} days.`);
  }
  rl.close();
});