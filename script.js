//your JS code here. If required.
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
