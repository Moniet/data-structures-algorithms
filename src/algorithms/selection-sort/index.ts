const selectionSort = (arr: number[]) => {
  let pos = 0
  let fixedPos = 0
  let minValPos = 0

  while (fixedPos < arr.length) {
    if (arr[pos] < arr[minValPos]) {
      minValPos = pos
    }

    if (pos === arr.length - 1) {
      const smallVal = arr[minValPos]

      arr[minValPos] = arr[fixedPos]
      arr[fixedPos] = smallVal

      fixedPos++
      pos = 0
    }

    pos++
  }

  return arr
}

export default selectionSort
