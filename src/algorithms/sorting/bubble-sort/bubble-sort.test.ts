import bubbleSort from "."

describe("Bubble Sort", () => {
  it("Sorts natural numbers correctly", () => {
    const arr = [6, 4, 2, 3, 1]
    const sortedArray = bubbleSort(arr)
    expect(sortedArray).toEqual([1, 2, 3, 4, 6])
  })

  it("Sorts integers correctly", () => {
    const arr = [2, 3, -6, -4, 2, 3, 1]
    const sortedArray = bubbleSort(arr)
    expect(sortedArray).toEqual([-6, -4, 1, 2, 2, 3, 3])
  })
})
