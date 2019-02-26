// es6 String concepts

// reverse a string
const reverse = str => (
  str
    .split(' ')
    .map(word => word.split('').reverse().join(''))
    .reverse()
    .join(' ')
)

// capitalise string words
const capitaliseWords = str => (
  str
    .split(' ')
    .map(word =>
      word.replace(word.charAt(0), word.charAt(0).toUpperCase()))
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
  console.log('reverse :', reverse('Argument goes here'))
  console.log('capitalise Words :', capitaliseWords('Argument goes here')) // capitalise Words : Argument Goes Here
  console.log('letterChanges :', letterChanges('Argument goes here'))

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

  // Simple string substitution
  const name = 'Brendan'
  console.log(`Yo, ${name}!`)

  const a = 10
  const b = 10
  console.log(`Sum is : ${a + b}`) // Sum is : 20
  console.log(`Multi is : ${a * b}`) // Multi is : 100

  // Checking for inclusion
  console.log('hello'.startsWith('hell')) // true
  console.log('hello'.endsWith('ello')) // true
  console.log('hello'.includes('ell')) // true
  console.log('doo '.repeat(3)) // doo doo doo

  // Spread a string
  // or convert string to char array
  const strTemplate = 'Steve'
  const chars = [...strTemplate] // like split(')
  console.log('chars : ', chars) // chars :  [ 'S', 't', 'e', 'v', 'e' ]
  const [chars2] = strTemplate
  console.log('chars2 : ', chars2)
}


export default HString
