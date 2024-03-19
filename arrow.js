// ES6 fat arrow function

// Basic syntax
let addNumbers = (num1, num2) => num1 + num2;
console.log(addNumbers(90, 10));

// Original ES5 function
let javaScript = {
  name: "JavaScript",
  libraries: ["React", "Angular", "Vue"],
  // Method to print libraries using ES5 function which doesn't preserve 'this' context
  printLibraries: function () {
    this.libraries.forEach(function (element) {
      console.log(this.name + " loves " + element); // 'this' context will refer to global or window object
    });
  },
};

console.log(javaScript.printLibraries()); // Logs each library with the name of JavaScript

// Object representing JavaScript with libraries and a method to print them
let javaScript2 = {
  name: "JavaScript",
  libraries: ["React", "Angular", "Vue"],
  // Method to print libraries using arrow function to preserve 'this' context
  printLibraries: function () {
    this.libraries.forEach((element) => {
      console.log(`${this.name} loves ${element}`);
    });
  },
};

console.log(javaScript2.printLibraries()); // Logs each library with the name of JavaScript
