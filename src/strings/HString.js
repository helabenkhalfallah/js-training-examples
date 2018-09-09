// es6 String concepts
const firstReverse = str => (
  str.split(' ')
    .map(word => word.split('').reverse().join(''))
    .reverse()
    .join(' ')
)

const letterChanges = (str) => {
  // code goes here
  const values = str.split(' ')
  const voyels = ['a', 'e', 'i', 'o', 'u']
  const results = values.map((word) => {
    let chars = word.split('')
    chars = chars.map((char) => {
      const asciiCode = (char.charCodeAt() === 90) ? 65 : (char.charCodeAt() + 1)
      const nextChar = String.fromCharCode(asciiCode).toLowerCase()
      return voyels.includes(nextChar) ? nextChar.toUpperCase() : nextChar
    })
    return chars.join('')
  })
  return results.join(' ')
}

const letterCapitalize = str => (
  str.split(' ')
    .map(word => word.replace(word.charAt(0), word.charAt(0).toUpperCase()))
    .join(' ')
)

// simple symbols
// a string is accepted only
// if all letter are surrounded with (+)
// 1.For the input "+d===+a+", the correct answer is false.
// 2.For the input "+a=", the correct answer is false.
// 3.For the input "2+a+a+", the correct answer is true.
// 4.For the input "==a+", the correct answer is false.
const isDelimiter = char => (/[+]/g.test(char))
const isChar = char => (/[A-z]/g.test(char))
const isCorrectSequence = (value) => {
  let correctedSequence = []
  let charCount = 0
  if (!value || value.length < 3 || isChar(value.charAt(0))) {
    correctedSequence = []
  } else {
    // count chars only
    const alphaValue = value.replace(/[A-z]/g, '')
    charCount = value.length - alphaValue.length

    // identify correct sequence
    for (let i = 0; i < value.length; i += 1) {
      if ((i + 1) < (value.length - 1)
        && (i + 2) < value.length) {
        const firstChar = value.charAt(i)
        const centerChar = value.charAt(i + 1)
        const nextChar = value.charAt(i + 2)
        if (isDelimiter(firstChar)
          && isChar(centerChar)
          && isDelimiter(nextChar)) {
          correctedSequence.push(centerChar)
        }
      }
    }
  }

  let isCorrectSqce = false
  if (correctedSequence
    && correctedSequence.length > 0
    && correctedSequence.length === charCount) {
    isCorrectSqce = true
  }
  return isCorrectSqce
}

const isCorrectSequenceOptimzed = (value) => {
  if (/^[a-zA-Z]/.test(value) || /[a-zA-Z]$/.test(value)) {
    return false
  } else if (/[^+][a-zA-Z]/.test(value) || /[a-zA-Z][^+]/.test(value)) {
    return false
  }
  return true
}

// have the function AlphabetSoup(str) take the str string parameter being passed and
// return the string with the letters in alphabetical order
// (ie. hello becomes ehllo). Assume numbers and punctuation symbols
// will not be included in the string.
const alphabetSoup = (value) => {
  if (value && value.length > 0) {
    return value.split('').sort().join('')
  }
  return value
}

// keep this function call here
const HString = () => {
  console.log(firstReverse('Argument goes here'))
  console.log(letterChanges('Argument goes here'))
  console.log(letterCapitalize('Argument goes here'))

  // simple symbols
  // a string is accepted only
  // if all letter are surrounded with (+)
  const value = '2ffcb=+a+a+'
  console.log('isCorrectSequence 1 : ', isCorrectSequence(value))

  // optimized version
  console.log('isCorrectSequence  2 : ', isCorrectSequenceOptimzed(value))

  // alphabetSoup
  const alphabetSoupValue = 'edgaccba'
  console.log('alphabetSoup : ', alphabetSoup(alphabetSoupValue))
}


export default HString
