const anagram = (str1: string, str2: string) => {
  if (str1.length !== str2.length) return false

  const counterObj: Record<string, number> = {}

  for (let i: number = 0; i < str1.length; i++) {
    const letter = str1[i]
    counterObj[letter] ? counterObj[letter]++ : (counterObj[letter] = 1)
  }

  for (let j: number = 0; j < str2.length; j++) {
    const letter = str2[j]

    if (!counterObj[letter]) {
      return false
    } else {
      counterObj[letter]--
    }
  }

  return true
}

export default anagram
