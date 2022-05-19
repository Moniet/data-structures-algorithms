import anagram from "./anagram"
describe("anagram", () => {
  it("identifies an anagram correctly", () => {
    expect(anagram("sitars", "stairs")).toBe(true)
  })

  it("reject non-anagrams correctly", () => {
    expect(anagram("sitars", "srs")).toBe(false)
    expect(anagram("sitars", "asfss")).toBe(false)
  })
})
