// Time Complexity : O(logn)
import binarySearch from "./index"

describe("binary search", () => {
  it("finds the value", () => {
    const arr = [2, 3, 4, 5]

    const result = binarySearch(2, arr)
    expect(result).toBe(0)
  })

  it("finds integer values", () => {
    const arr = [-1, 2, 3, 4, 5]

    const result = binarySearch(-1, arr)
    expect(result).toBe(0)
  })
})
