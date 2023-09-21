function maxSum(arr: number[], toSum: number) {
  if (toSum >= arr.length) return null

  let tempSum = 0
  let maxSum = 0

  for (let i = 0; i < toSum; i++) {
    tempSum += arr[i]
  }

  tempSum = maxSum

  for (let j = toSum; j < arr.length; j++) {
    tempSum = tempSum - arr[j - toSum] + arr[j]
    maxSum = Math.max(tempSum, maxSum)
  }

  return maxSum
}
