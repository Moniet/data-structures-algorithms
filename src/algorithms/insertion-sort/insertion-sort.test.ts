import insertionSort from "./index"
describe("Insersion Sort", () => {
  it("Sorts whole", () => {
    const sortedArr = insertionSort([3, 4, 5, 6, 1, 2, 0])

    console.log(sortedArr)

    expect(sortedArr?.[0]).toBe(0)
    expect(sortedArr?.[1]).toBe(1)
    expect(sortedArr?.[2]).toBe(2)
  })

  it("Sorts integers", () => {
    const sortedArr = insertionSort([-2, -1, -3, 0, 1, 2, 3])

    console.log(sortedArr)

    expect(sortedArr?.[0]).toBe(-3)
    expect(sortedArr?.[1]).toBe(-2)
    expect(sortedArr?.[2]).toBe(-1)
    expect(sortedArr?.[2]).toBe(0)
  })
})
