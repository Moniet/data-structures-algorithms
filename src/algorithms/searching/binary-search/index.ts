const binarySearch = (searchNum: number, arr: number[]) => {
  if (searchNum > arr[arr.length - 1]) return null
  if (searchNum < arr[0]) return null

  let start = 0
  let end = arr.length - 1

  while (start <= end) {
    const midPos = Math.floor((start + end) / 2)

    if (arr[midPos] === searchNum) return midPos

    if (searchNum < arr[midPos]) {
      end = midPos
    }

    if (searchNum > arr[midPos]) {
      start = midPos
    }
  }
}

export default binarySearch
