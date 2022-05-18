import insertionSort from "./index"
describe("Insersion Sort", () => {
  it("sorts whole numbers", () => {
    const sortedArr = insertionSort([3, 4, 5, 6, 1, 2, 0])

    expect(sortedArr[0]).toBe(0)
    expect(sortedArr[1]).toBe(1)
    expect(sortedArr[2]).toBe(2)
  })

  it("sorts integers", () => {
    const sortedArr = insertionSort([-2, -1, -3, 0, 1, 2])

    expect(sortedArr[0]).toBe(-3)
    expect(sortedArr[1]).toBe(-2)
    expect(sortedArr[2]).toBe(-1)
    expect(sortedArr[3]).toBe(0)
    expect(sortedArr[4]).toBe(1)
    expect(sortedArr[5]).toBe(2)
  })
})
