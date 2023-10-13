function miniMaxSum(arr) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);
  
    // Calculate the minimum sum by excluding the last element
    const minSum = arr.slice(0, 4).reduce((acc, curr) => acc + curr, 0);
  
    // Calculate the maximum sum by excluding the first element
    const maxSum = arr.slice(1, 5).reduce((acc, curr) => acc + curr, 0);
  
    // Print the minimum and maximum sums
    console.log(minSum, maxSum);
}