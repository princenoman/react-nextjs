//1. Date Object

//a. Create a function that takes a date in the format "YYYY-MM-DD" as a parameter and returns the day of the week for that date. The function should use the Date object.

function findDay(date) {
  const fulldate = new Date(date);
  const day = fulldate.getDay();
  return day;
}

// b. Implement the function to display the day of the week for the current date.
console.log(findDay("2023-06-18"));

// 2.Math Object:

// a. Write a JavaScript function that takes an array of numbers as input and returns the square root of the sum of squares of all the numbers. Use the Math object to perform the necessary calculations.

function sqRoot(numbers) {
  const sqOfNumbers = numbers.map((number) => Math.pow(number, 2));
  const sum = sqOfNumbers.reduce((total, num) => total + num);
  const sqRoot = Math.sqrt(sum);
  return sqRoot;
}

// b. Implement the function to display the square root of the sum of squares for an array of numbers.
console.log(sqRoot([1, 2]));

// 3.Numbers:

// a. Write a JavaScript function that takes a positive integer as input and returns true if it is a prime number, otherwise returns false.
function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

// b. Implement the function to check if a given positive integer is a prime number.

console.log(isPrime(11));

// 4.Window Object:

// a. Create a function that opens a new window with a specified URL and dimensions (width and height).
function newWindow(URL, name, dimensions) {
  return window.open(URL, name, dimensions);
}

// b. Implement the function to open a new window with the URL "https://www.example.com" and dimensions 800x600.
console.log(
  newWindow("https://www.example.com", "_blank", "width=800 height=600")
);

// 5.Navigator Object:

// a. Write a JavaScript function that detects the user's browser name and version using the navigator object.
function getBrowsernameAndVersion() {
  return `Browser Name: ${window.navigator.appName} and Version : ${window.navigator.appVersion}`;
}

// b. Implement the function to display the user's browser name and version.
console.log(getBrowsernameAndVersion());

// 6.Geolocation:

// a. Implement a JavaScript function that retrieves the user's current location (latitude and longitude) using the geolocation API.

function getLocation() {
  navigator.geolocation.getCurrentPosition(function (position) {
    return document.write(
      "<h1 >Latitude:" +
        position.coords.latitude +
        " and " +
        "Longitude :" +
        position.coords.longitude +
        "</h1>"
    );
  });
}

getLocation();

// 7.JS Common Events:

// Implement a webpage with the following functionality:

// a. When the user clicks anywhere on the page, display an alert with the coordinates (x, y) of the click.

function getCoridnates(e) {
  let x = e.clientX;
  let y = e.clientY;
  alert("Coordinates(" + "x :" + x + ", " + "y :" + y + ")");
}

// b. When the user presses any key on the keyboard, display an alert with the key code of the pressed key.

function getKeyCode(e) {
  alert(e.keyCode);
}
// c. When the user moves the mouse over an image, change the image source to another image of your choice.
function imageURLChange() {
  document.getElementById("image").src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png";
}
