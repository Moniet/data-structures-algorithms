const defaultValidator = (value: any) => (value === 0 ? true : !!value)

class List<TValue> {
  length: number

  constructor(
    public memory: TValue[] = [],
    private validate = defaultValidator
  ) {
    this.length = memory.length
  }

  push(value: TValue) {
    const isValid = this.validate(value)
    if (!isValid) return null

    const lastAddress = this.length
    this.memory[lastAddress] = value
    this.length++
  }

  pop() {
    if (this.length === 0) return null

    const lastAddress = this.length - 1
    const lastValue = this.memory[lastAddress]
    delete this.memory[lastAddress]
    this.length--

    return lastValue
  }

  unshift(value: TValue) {
    let prevValue = value

    for (let i = 0; i < this.length; i++) {
      const currentValue = this.memory[i]
      this.memory[i] = prevValue
      prevValue = currentValue
    }

    this.memory[this.length] = prevValue
    this.length++
  }

  shift() {
    const value = this.memory[0]

    for (let i = 0; i < this.length - 1; i++) {
      this.memory[i] = this.memory[i + 1]
    }

    delete this.memory[this.length - 1]
    this.length--

    return value
  }
}

export default List
