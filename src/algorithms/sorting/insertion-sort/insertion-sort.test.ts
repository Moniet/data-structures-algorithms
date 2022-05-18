import insertionSort from "./index"
describe("Insersion Sort", () => {
  it("sorts whole numbers", () => {
    const sortedArr = insertionSort([3, 4, 5, 6, 1, 2, 0])
    expect(sortedArr).toEqual([0, 1, 2, 3, 4, 5, 6])
  })

  it("sorts integers", () => {
    const sortedArr = insertionSort([-2, -1, -3, 0, 1, 2])
    expect(sortedArr).toEqual([-3, -2, -1, 0, 1, 2])
  })
})
