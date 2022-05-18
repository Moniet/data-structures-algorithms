import selectionSort from "."

describe("Selection Sort", () => {
  it("Sorts correctly", () => {
    const arr = [3, 2, 1, 4]
    const selectionSortedArray = selectionSort(arr)
    const sortedArray = arr.sort()

    expect(sortedArray[0]).toBe(selectionSortedArray[0])
    expect(sortedArray[1]).toBe(selectionSortedArray[1])
    expect(sortedArray[2]).toBe(selectionSortedArray[2])
    expect(sortedArray[3]).toBe(selectionSortedArray[3])
  })
})
