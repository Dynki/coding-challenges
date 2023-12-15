/*

Find the length of the longest substring from the string without repeating any character. 
In other words, find the length of the longest substring with unique characters. 

*/

const getLength = (str) => {
  const tempStore = []
  let longestLength = 0

  for (let index = 0; index < str.length; index++) {
    const charAtPosition = tempStore.indexOf(str[index]);
    
    if (charAtPosition !== -1) {
      tempStore.splice(0, charAtPosition + 1)
    }

    tempStore.push(str[index])

    longestLength = Math.max(longestLength, tempStore.length)
  }

  return longestLength
}

const testString = "abbbcabcdefef"

console.log(getLength(testString))