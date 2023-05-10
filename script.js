function exercise1() {
  // create an array of day names for later use
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // create a new Date object to get the current date and time
  const today = new Date();

  // get the day of the week from the daysOfWeek array using the getDay() method
  const dayOfWeek = daysOfWeek[today.getDay()];

  // calculate the current hour in 12-hour format, with a fallback to 12 for midnight
  const hour = today.getHours() % 12 || 12;

  // get the current minute and pad it with a leading zero if necessary
  const minute = today.getMinutes().toString().padStart(2, "0");

  // get the current second and pad it with a leading zero if necessary
  const second = today.getSeconds().toString().padStart(2, "0");

  // determine whether it is AM or PM based on the current hour
  const period = today.getHours() < 12 ? "AM" : "PM";

  // combine the formatted hour, minute, and second with the period
  const time = `${hour} ${period} : ${minute} : ${second}`;

  // output the formatted string using console.log()
  console.log(`Today is: ${dayOfWeek}. Current time is: ${time}`);
}

function exercise2() {
  window.print();
}

function exercise3() {
  // Get the current date
  const today = new Date();
  // Get the month component of the current date and add 1 (because months are 0-indexed)
  const month = today.getMonth() + 1;
  // Get the day component of the current date
  const day = today.getDate();
  // Get the year component of the current date
  const year = today.getFullYear();

  // Create the mm-dd-yyyy format string
  const mmddyyyy = `${month}-${day}-${year}`;
  // Create the mm/dd/yyyy format string
  const mmddyyyySlashes = `${month}/${day}/${year}`;
  // Create the dd-mm-yyyy format string
  const ddmmyyyy = `${day}-${month}-${year}`;
  // Create the dd/mm/yyyy format string
  const ddmmyyyySlashes = `${day}/${month}/${year}`;

  // Concatenate the four date format strings together into a single string
  console.log(
    `mm-dd-yyyy: ${mmddyyyy} | mm/dd/yyyy: ${mmddyyyySlashes} | dd-mm-yyyy: ${ddmmyyyy} | dd/mm/yyyy: ${ddmmyyyySlashes}`
  );
}

function exercise4(side1, side2, side3) {
  // Use Heron's formula to calculate the semiperimeter of the triangle
  const s = (side1 + side2 + side3) / 2;
  // Use the semiperimeter and the lengths of the sides to calculate the area of the triangle
  const area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
  // Log the area of the triangle to the console
  console.log(`The area of the triangle is ${area}`);
}

function exercise5(str) {
  // Get the last character of the string
  const lastChar = str.charAt(str.length - 1);
  // Remove the last character from the string
  const truncatedStr = str.slice(0, -1);
  // Attach the last character to the front of the string
  const rotatedStr = lastChar + truncatedStr;
  // Return the rotated string
  console.log(rotatedStr);
}

function exercise6(year) {
  let leap = false;

  // A year is a leap year if it is divisible by 4 but not by 100,
  // or if it is divisible by 400
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        leap = true;
      }
    } else {
      leap = true;
    }
  }

  // Result log
  if (leap) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
}

function exercise7() {
  // Loop through the years 2014 to 2050
  for (let year = 2014; year <= 2050; year++) {
    // Create a new Date object for January 1st of the current year
    const date = new Date(year, 0, 1);
    // Use the getDay() method to get the day of the week (0=Sunday, 1=Monday, etc.)
    if (date.getDay() === 0) {
      // If the day of the week is Sunday, log a message to the console
      console.log(`January 1st is a Sunday in ${year}`);
    }
  }
}

function exercise8() {
  // Generate a random integer between 1 and 10
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  // Prompt the user to enter a guess
  const guess = parseInt(prompt("Guess a number between 1 and 10"));

  // Check if the guess is correct
  if (guess === randomNumber) {
    console.log("Good work");
  } else {
    console.log(`Not matched, the number was ${randomNumber}`);
  }
}

function exercise9() {
  // Set the date of Christmas as December 25
  const christmasDay = new Date("December 25, 2023");

  // Get the current date
  const today = new Date();

  // Calculate the difference between today and Christmas in milliseconds
  const differenceMs = christmasDay.getTime() - today.getTime();

  // Calculate the difference in days
  const differenceDays = Math.ceil(differenceMs / (1000 * 3600 * 24));

  // Log the result to the console
  console.log(`There are ${differenceDays} days until Christmas!`);
}

function exercise10() {
  // Prompt the user for the first number
  const num1 = parseFloat(prompt("Enter the first number:"));

  // Prompt the user for the second number
  const num2 = parseFloat(prompt("Enter the second number:"));

  // Calculate the multiplication and division of the two numbers
  const multiplication = num1 * num2;
  const division = num1 / num2;

  // Log the results to the console
  console.log(`Multiplication: ${multiplication}.`);
  console.log(`Division: ${division}.`);
}

function exercise11() {
  // Prompt the user for the temperature and the unit of measurement
  const temperature = parseFloat(prompt("Enter the temperature:"));
  const unit = prompt("Enter the unit of measurement (C or F):").toUpperCase();

  // Check the unit of measurement and convert the temperature
  if (unit === "C") {
    // Convert Celsius to Fahrenheit
    const fahrenheit = (temperature * 9) / 5 + 32;
    console.log(
      `${temperature} degrees Celsius is equal to ${fahrenheit} degrees Fahrenheit.`
    );
  } else if (unit === "F") {
    // Convert Fahrenheit to Celsius
    const celsius = ((temperature - 32) * 5) / 9;
    console.log(
      `${temperature} degrees Fahrenheit is equal to ${celsius} degrees Celsius.`
    );
  } else {
    console.log("Invalid unit of measurement. Please enter C or F.");
  }
}

function exercise12() {
  const url = window.location.href;
  console.log(`The current website URL is: ${url}`);
}

function exercise13() {
  // Prompt the user to enter a variable name
  const varName = prompt("Enter a variable name:");

  // Prompt the user to enter a variable value
  const varValue = prompt(`Enter a value for ${varName}:`);

  // Create the variable with the user-defined name and value
  window[varName] = varValue;

  // Log the variable to the console
  console.log(`${varName} = ${window[varName]}`);
}

function exercise14(filename) {
  const parts = filename.split(".");
  if (parts.length === 1) {
    console.log("No file extension found.");
  } else {
    console.log(`File extension: ${parts[parts.length - 1]}`);
  }
}

function exercise15(num) {
  const diff = Math.abs(num - 13);
  if (num > 13) {
    console.log(diff * 2);
  }
  console.log(diff);
}

function exercise16(a, b) {
  let sum = a + b;
  if (a === b) {
    sum *= 3;
  }
  console.log(sum);
}

function exercise17(num) {
  // Calculate the absolute difference between the given number and 19
  let absDiff = Math.abs(num - 19);

  // Check if the number is greater than 19
  if (num > 19) {
    // Return triple the absolute difference
    console.log(3 * absDiff);
  } else {
    // Return the absolute difference
    console.log(absDiff);
  }
}

function exercise18(num1, num2) {
  if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function exercise19(num) { 
  if (Math.abs(100 - num) <= 20 || Math.abs(400 - num) <= 20) { 
    // find the absolute difference between the given number and 100 or 400
    // checking if the absolute difference is less than or equal to 20
    console.log(num + ' is within 20 of 100 or 400'); 
  } else {
    console.log(num + ' is not within 20 of 100 or 400'); 
  }
}

function exercise20(num1, num2) {
  // Check if one is positive and another is negative
  if ((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)) { 
    console.log("One number is positive and another is negative.");
  } else {
    console.log("Both numbers have the same sign or are zero.");
  }
}

function exercise21(str) {
  // Check if the string starts with 'Py'
  if (str.substring(0, 2) === 'Py') {
    // If yes, return the original string
    console.log(str);
  } else {
    // If not, add 'Py' in front of the string and return the new string
    console.log('Py' + str);
  }
}

function exercise22(str, index) {
  // This removes the character at the specified position
  let modifiedStr = str.slice(0, index) + str.slice(index + 1);
  
  // Return the modified string
  console.log(modifiedStr);
}


// call the exercise function there
exercise22("test", 2);
