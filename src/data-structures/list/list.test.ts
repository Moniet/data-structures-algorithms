import List from "."

describe("List Data Structure", () => {
  /* Instantiation Checks */

  it("instantiates with 0 length", () => {
    const list = new List()
    expect(list.length).toBe(0)
  })

  it("instantiates with provided values", () => {
    const startingVals = [1, 2]
    const list = new List<number>(startingVals, (val: number) =>
      Number.isInteger(val)
    )

    expect(list.memory).toEqual(startingVals)
    expect(list.length).toBe(2)
  })

  /* List Methods */

  it("can 'push'an item", () => {
    const list = new List()

    list.push(2)
    list.push(3)

    expect(list.memory).toEqual([2, 3])
  })

  it("can 'pop' an item", () => {
    const list = new List([2, 3])

    const poppedVal = list.pop()

    expect(list.length).toBe(1)
    expect(poppedVal).toBe(3)
    expect(list.memory).toEqual([2, undefined])
  })

  it("can 'shift' an item", () => {
    const list = new List([1, 2])

    const shiftedVal = list.shift()

    expect(list.length).toBe(1)
    expect(list.length).toBe(list.memory.length - 1)
    expect(shiftedVal).toBe(1)
  })

  it("can 'unshift' and item", () => {
    const list = new List([1, 2])

    list.unshift(0)

    expect(list.memory).toEqual([0, 1, 2])
    expect(list.length).toBe(3)
  })
})
