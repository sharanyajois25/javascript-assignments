const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function findMissingNumber(arr) {
  const N = arr.length + 1; // N is the range [1, N]
  const totalSum = (N * (N + 1)) / 2; // Sum of the first N natural numbers

  const sumOfArray = arr.reduce((acc, current) => acc + current, 0);

  const missingNumber = totalSum - sumOfArray;

  return missingNumber;
}

rl.question('Enter the array of integers (comma-separated): ', (input) => {
  const arr = input.split(',').map(Number);// comma separated
  const missingNumber = findMissingNumber(arr);
  console.log('Missing Number:', missingNumber);
  rl.close();
});

  