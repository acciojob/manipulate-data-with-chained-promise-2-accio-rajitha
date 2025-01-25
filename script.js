//your JS code here. If required.
// Step 1: Create a function that returns a promise with an array of numbers after 3 seconds
function getNumbers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]); // Resolving the promise with the array
        }, 3000); // Delay of 3 seconds
    });
}

// Step 2: Function to filter out odd numbers
function filterEvenNumbers(arr) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const evenNumbers = arr.filter(num => num % 2 === 0); // Filtering even numbers
            document.getElementById('output').textContent = `Even numbers: ${evenNumbers.join(', ')}`; // Updating DOM
            resolve(evenNumbers); // Resolving with the even numbers
        }, 1000); // Delay of 1 second
    });
}

// Step 3: Function to multiply the even numbers by 2
function multiplyByTwo(arr) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const doubled = arr.map(num => num * 2); // Multiplying each number by 2
            document.getElementById('output').textContent = `Doubled numbers: ${doubled.join(', ')}`; // Updating DOM
            resolve(doubled); // Resolving with the doubled numbers
        }, 2000); // Delay of 2 seconds
    });
}

// Start the process by calling the getNumbers function and chaining the promises
getNumbers()
    .then((data) => {
        return filterEvenNumbers(data); // Step 2: Filter out odd numbers
    })
    .then((evenNumbers) => {
        return multiplyByTwo(evenNumbers); // Step 3: Multiply even numbers by 2
    })
    .catch((error) => {
        console.error('Error:', error); // Handling any potential errors
    });
/*
// Create a function that returns a promise with an array after 3 seconds
function manipulateData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

// Function to filter out odd numbers
function filterEvenNumbers(arr) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const evenNumbers = arr.filter(num => num % 2 === 0);
      resolve(evenNumbers);
    }, 1000);
  });
}

// Function to multiply even numbers by 2
function multiplyByTwo(arr) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const doubled = arr.map(num => num * 2);
      resolve(doubled);
    }, 2000);
  });
}

// Start the process by calling the manipulateData function
manipulateData()
  .then((data) => filterEvenNumbers(data)) // Filter out odd numbers
  .then((evenNumbers) => {
    // Update DOM with the filtered even numbers
    document.getElementById('output').textContent = `Even numbers: ${evenNumbers.join(', ')}`;
    return multiplyByTwo(evenNumbers); // Multiply even numbers by 2
  })
  .then((doubledNumbers) => {
    // Update DOM with the doubled numbers
    document.getElementById('output').textContent = `Doubled numbers: ${doubledNumbers.join(', ')}`;
  })
  .catch((error) => {
    console.error('Error:', error);
  });
*/