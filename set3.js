// 1.Write a JavaScript program to check if a given number is prime.
// Sample Input: (7);
// Sample Output: true

function isPrime(number) {
  if (number <= 1) {
    return false; 
  }

  if (number <= 3) {
    return true; 
  }

  if (number % 2 === 0 || number % 3 === 0) {
    return false; 
  }

  
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

const sampleInput = 7;
const isPrimeResult = isPrime(sampleInput);
console.log(isPrimeResult);

// 2.Write a JavaScript function to calculate the factorial of a given non-negative integer using recursion.
// Sample Input: (5);
// Sample Output: 120

function factorial(n) {
  if (n === 0) {
    return 1; 
  } else {
    return n * factorial(n - 1); 
  }
}

const samInput = 5;
const result = factorial(samInput);
console.log(result);

// 3.Write a JavaScript program to reverse the order of words in a given sentence.
// Sample Input:("Hello World");
// Sample Output: "World Hello"

function reverseSentence(sentence) {
  const words = sentence.split(" ");

  const reversedWords = words.reverse();

  const reversedSentence = reversedWords.join(" ");

  return reversedSentence;
}

const inputSentence = "Hello World";
const outputSentence = reverseSentence(inputSentence);
console.log(outputSentence);

// 4.Write a JavaScript function to find the sum of all numbers in an array.
// Sample Input: ([1, 2, 3, 4, 5]);
// Sample Output: 15

function sumArray(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}
const inputArray = [1, 2, 3, 4, 5];
const outputSum = sumArray(inputArray);
console.log(outputSum);

// 5.Write a JavaScript program to find the largest sum of any two numbers in an array.
// Sample Input: ([1, 2, 3, 4, 5]);
// Sample Output: 9
function findLargestSumOfTwo(numbers) {
  if (numbers.length < 2) {
    return "Array should contain at least two numbers.";
  }

  let largestSum = numbers[0] + numbers[1];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const currentSum = numbers[i] + numbers[j];
      if (currentSum > largestSum) {
        largestSum = currentSum;
      }
    }
  }

  return largestSum;
}
const inputArr = [1, 2, 3, 4, 5];
const largestSum = findLargestSumOfTwo(inputArr);
console.log(largestSum);

// 6.Write a JavaScript function to check if a given string is a valid URL.
// Sample Input: ("https://www.example.com");
// Sample Output:true

function isValidURL(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

const inputURL = "https://www.example.com";
const isValid = isValidURL(inputURL);
console.log(isValid);

// 7.Write a JavaScript program to sort an array of objects based on a specific property value.
// Sample Input: const data = [
//   { name: "John", age: 30 },
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 35 }
// ];

// sortObjectsByProperty(data, "age");
// Sample Output: [
//   { name: "Alice", age: 25 },
//   { name: "John", age: 30 },
//   { name: "Bob", age: 35 }
// ]

function sortObjectsByProperty(data, property) {
  return data.sort((a, b) => a[property] - b[property]);
}

const data = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
];

const sortedData = sortObjectsByProperty(data, "age");
console.log(sortedData);
