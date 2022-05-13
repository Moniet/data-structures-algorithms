import swap from "./swap"

const bubbleSort = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false

    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap([j, j + 1], arr)
        swapped = true
      }
    }

    if (!swapped) break
  }

  return arr
}

export default bubbleSort
