const countUniqueValues: (value: number[]) => number[] = (arr: number[]) => {
  let i = 0

  for (let j = 0; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }

  return arr.slice(0, i + 1)
}

countUniqueValues([1, 1, 2, 4, 5, 5, 5, 6, 6, 6, 7, 9, 9])
