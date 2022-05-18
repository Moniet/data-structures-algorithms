const binarySearch = (searchNum: number, arr: number[]) => {
  if (searchNum > arr[arr.length - 1]) return null
  if (searchNum < arr[0]) return null

  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    const midPos = Math.floor((left + right) / 2)

    if (arr[midPos] === searchNum) return midPos

    if (searchNum < arr[midPos]) {
      right = midPos
    }

    if (searchNum > arr[midPos]) {
      left = midPos
    }
  }
}

export default binarySearch
