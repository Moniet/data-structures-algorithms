import List from "."

describe("List Data Structure", () => {
  /* Instantiation Checks */

  it("instantiates with 0 length", () => {
    const list = new List()
    expect(list.length).toBe(0)
  })

  it("instantiates with provided values", () => {
    const list = new List<number>([1, 2], (val: number) =>
      Number.isInteger(val)
    )

    expect(list.memory[0]).toBe(1)
    expect(list.memory[1]).toBe(2)
    expect(list.length).toBe(2)
  })

  /* List Methods */

  it("can 'push'an item", () => {
    const list = new List()

    list.push(2)
    list.push(3)

    expect(list.memory[0]).toBe(2)
    expect(list.memory[1]).toBe(3)
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
