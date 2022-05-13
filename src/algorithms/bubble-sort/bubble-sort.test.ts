import bubbleSort from "."

describe("Bubble Sort", () => {
  it("Sorts natural numbers correctly", () => {
    const arr = [6, 4, 2, 3, 1]
    const sortedArray = bubbleSort(arr)

    expect(sortedArray[0]).toBe(1)
    expect(sortedArray[1]).toBe(2)
    expect(sortedArray[2]).toBe(3)
  })

  it("Sorts integers correctly", () => {
    const arr = [2, 3, -6, -4, 2, 3, 1]
    const sortedArray = bubbleSort(arr)

    expect(sortedArray[0]).toBe(-6)
    expect(sortedArray[1]).toBe(-4)
    expect(sortedArray[2]).toBe(1)
  })
})
