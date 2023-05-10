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

function exercise23(str) {
  // Check if the length of the string is greater than or equal to 1
  if (str.length >= 1) {
    // Get the first character of the string
    const firstChar = str.charAt(0);
    // Get the last character of the string
    const lastChar = str.charAt(str.length - 1);
    // Get the substring between the first and last characters
    const middleChars = str.substring(1, str.length - 1);
    // Return the modified string with the first and last characters swapped
    console.log(lastChar + middleChars + firstChar);
  } else {
    // If the length of the string is less than 1, return the original string
    console.log(str);
  }
}

function exercise24(str) {
  // Check if string is empty or has only one character
  if (str.length <= 1) {
    console.log(str);
  }
  
  // Get the first character of the string
  const firstChar = str.charAt(0);
  
  // Return the new string with first character added to the front and back
  console.log(firstChar + str + firstChar);
}

function exercise25(num) {
  // check if the number is positive
  if (num > 0) {
    // check if the number is a multiple of 3 or 7 using the remainder operator %
    if (num % 3 === 0 || num % 7 === 0) {
      console.log(`${num} is a multiple of 3 or 7`);
    } else {
      console.log(`${num} is not a multiple of 3 or 7`);
    }
  } else {
    console.log(`${num} is not a positive number`);
  }
}

function exercise26(str) {
  // Check if string length is 3 or more
  if (str.length < 3) {
    console.log("String length must be 3 or more");
    return;
  }

  // Get last 3 characters of the input string
  let lastThreeChars = str.slice(-3);

  // Add last 3 characters at both front and back of the new string
  let newStr = lastThreeChars + str + lastThreeChars;

  console.log(newStr);
}

function exercise27(str) {
  if (str.startsWith("Java")) {
    console.log("The string starts with 'Java'");
  } else {
    console.log("The string does not start with 'Java'");
  }
}

function exercise28(num1, num2) {
  if ((num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99)) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function exercise29(num1, num2, num3) {
  if ((num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99) || (num3 >= 50 && num3 <= 99)) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function exercise30(str) {
  // Check if "Script" appears at the 5th position
  if (str.length >= 6 && str.substring(4, 10) === "Script") {
    // If "Script" appears in the string, return the string without "Script"
    console.log(str.substring(0, 4) + str.substring(10, str.length));
  } else {
    // Otherwise, return the original string
    console.log(str);
  }
}

function exercise31(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    console.log(num1);
  } else if (num2 >= num1 && num2 >= num3) {
    console.log(num2);
  } else {
    console.log(num3);
  }
}

function exercise32(num1, num2) {
  const diffNum1 = Math.abs(100 - num1);
  const diffNum2 = Math.abs(100 - num2);
  
  if (diffNum1 === diffNum2) {
    console.log("Both numbers are equidistant from 100.");
  } else if (diffNum1 < diffNum2) {
    console.log(`${num1} is closer to 100.`);
  } else {
    console.log(`${num2} is closer to 100.`);
  }
}

function exercise33(num1, num2) {
  if ((num1 >= 40 && num1 <= 60 || num1 >= 70 && num1 <= 100) ||
      (num2 >= 40 && num2 <= 60 || num2 >= 70 && num2 <= 100)) {
    console.log("They are in range");
  } else {
    console.log("They are out of range");
  }
}

function exercise34(num1, num2) {
  if (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) {
    console.log(Math.max(num1, num2));
  } else {
    console.log("Both numbers should be in the range of 40 to 60 inclusive");
  }
}

function exercise35(str, char) {
  // Check if the string length is at least 4 characters long
  if (str.length >= 4) {
    // Check if the specified character exists between the 2nd and 4th positions
    if (str.substring(1, 4).includes(char)) {
      console.log(true);
    }
  }
  console.log(false);
}

function exercise36(num1, num2, num3) {
  // checking if all numbers are positive
  if(num1 >= 0 && num2 >= 0 && num3 >= 0) { 
    // finding last digit of num1
    let lastDigit1 = num1 % 10; 
    // finding last digit of num2
    let lastDigit2 = num2 % 10; 
    // finding last digit of num3
    let lastDigit3 = num3 % 10; 
    // checking if all last digits are the same
    console.log(lastDigit1 === lastDigit2 && lastDigit2 === lastDigit3); 
  } else {
    // error message for non-positive integers
    console.log("Please enter positive integers only."); 
  }
}

function exercise37(str) {
  if (str.length < 3) {
    console.log(str.toUpperCase());
  } else {
    console.log(str.substring(0, 3).toLowerCase() + str.substring(3));
  }
}

/**
 * Returns true if the student has received an A+ grade,
 * otherwise returns false.
 *
 * @param {number} totalMarks - The total marks scored by the student.
 * @param {string} examType - The type of examination 
 * @returns {boolean} - Whether or not the student has received an A+ grade.
 */
function exercise38(totalMarks, examType) {
  if (examType === "Final-exam" && totalMarks >= 90) {
    console.log(true);
  } else if (totalMarks >= 89 && totalMarks <= 100) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function exercise39(num1, num2) {
  // Compute the sum of the two given integers
  let sum = num1 + num2;

  // Check if the sum is in the range 50..80
  if (sum >= 50 && sum <= 80) {
    console.log(65); // Return 65 if sum is in the range
  } else {
    console.log(80); // Return 80 if sum is not in the range
  }
}

function exercise40(num1, num2) {
  if (num1 === 8 || num2 === 8 || num1 + num2 === 8 || Math.abs(num1 - num2) === 8) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function exercise41(num1, num2, num3) {
  if (num1 === num2 && num2 === num3) {
    console.log(30);
  } else if (num1 === num2 || num1 === num3 || num2 === num3) {
    console.log(40);
  } else {
    console.log(20);
  }
}

function exercise42(num1, num2, num3) {
  if (num1 < num2 && num2 < num3) {
    console.log("Strict mode");
  } else if (num1 <= num2 && num2 <= num3) {
    console.log("Soft mode");
  } else {
    console.log("Not increasing");
  }
}

function exercise43(num1, num2, num3) {
  // Get the rightmost digit of each number
  const digit1 = num1 % 10;
  const digit2 = num2 % 10;
  const digit3 = num3 % 10;

  // Check if any two or all three of them have the same rightmost digit
  if (digit1 === digit2 || digit1 === digit3 || digit2 === digit3 || digit1 === digit2 && digit2 === digit3) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function exercise44(num1, num2, num3) {
  if (num1 < 20 && num1 < num2 && num1 < num3) {
    console.log(true);
  }
  if (num2 < 20 && num2 < num1 && num2 < num3) {
    console.log(true);
  }
  if (num3 < 20 && num3 < num1 && num3 < num2) {
    console.log(true);
  }
  console.log(false);
}

function exercise45(num1, num2) {
  if (num1 === 15 || num2 === 15 || num1 + num2 === 15 || Math.abs(num1 - num2) === 15) {
    console.log(true);
  } else {
    console.log(false);
  }
}


// call the exercise function there
exercise43(1,2,4);
