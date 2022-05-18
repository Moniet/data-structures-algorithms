const swap = ([pos1, pos2]: [number, number], arr: number[]) => {
  const temp = arr[pos1]
  arr[pos1] = arr[pos2]
  arr[pos2] = temp
}

export default swap
