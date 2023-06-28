function findMaxSubarraySum(arr) {
  let maxSum = arr[0];
  let currentSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    // Find the maximum between the current element and the current sum plus the element
    currentSum = Math.max(arr[i], currentSum + arr[i]);

    // Update the maximum sum if the current sum is greater
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Example usage:
const arr = [1, -3, 2, 1, -1];
const maxSum = findMaxSubarraySum(arr);
console.log("Maximum subarray sum:", maxSum);