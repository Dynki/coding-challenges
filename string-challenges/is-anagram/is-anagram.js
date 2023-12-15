function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false

  console.log(str1.split('').sort().join(''))
  console.log([...str2].sort().join(''))

  return [...str1].sort().join('') === [...str2].sort().join('')
}

const testString = 'dictionary'
const testString2 = 'indicatory'

return console.log(`Is anagram = ${isAnagram(testString, testString2)}`)