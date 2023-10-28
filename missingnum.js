function findMissingNumber(arr) {
    const N = arr.length + 1; // N is the range [1, N]
    const totalSum = (N * (N + 1)) / 2; // Sum of the first N natural numbers
  
    const sumOfArray = arr.reduce((acc, current) => acc + current, 0);
  
    const missingNumber = totalSum - sumOfArray;
  
    return missingNumber;
  }
  
  // Example usage:
  const arr = [1, 2, 4, 6, 3, 7, 8];
  const missingNumber = findMissingNumber(arr);
  console.log("Missing Number:", missingNumber);
  