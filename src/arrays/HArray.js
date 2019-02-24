// es6 array new concepts
import * as HDateUtils from '../utils/HDateUtils'

// generate alphabet from a to z
const generateAlphabet = () => (Array.from(String.fromCharCode(...Array(123).keys()).slice(97)))


// return diff between 2 array
const arrayDifference = (a, b) => {
  if (a && b) {
    return a.filter(item => !b.includes(item))
  }
  return a
}

// decompose number to array of digits
const decomposeDigit = number => (number.toString().split(''))

// pow array digits
const powDigits = (digits, pow) => {
  if (digits) {
    return digits.map(a => a ** pow)
  }
  return []
}

// return array items multiply result
const multiplyArrayDigits = digits => (digits ? digits.reduce((a, b) => a * b) : -1)

// return array items sum
const addArrayDigits = digits => (digits ? digits.reduce((a, b) => a + b) : -1)

// sort negatives
// and positives array values
const sortArray = (array) => {
  if (Array.isArray(array) && array.length > 0) {
    return array.sort((a, b) => a - b)
  }
  return []
}

// modify array values
const modifyArrayValues = array => (array.map(item => item + 2))

// check if all items in array satisfay condition
const isAllItemsPositive = array => (array.every(item => item > 0))

// check if all elements
// on array are lowerCase
const isLowerCase = (array) => {
  if (Array.isArray(array) && array.length > 0) {
    return array.every(a => (a === a.toLowerCase()))
  }
  return false
}

// remove an item
const removeItem = (array, item) => {
  if (Array.isArray(array) && item) {
    const index = array.indexOf(item)
    if (index > 0) {
      // index = -1 if not found
      array.splice(index, 1)
    }
  }
  return array
}

// replace an item
const replaceItem = (array, item, newItem) => {
  if (Array.isArray(array) && item) {
    const index = array.indexOf(item)
    if (index > 0) {
      // index = -1 if not found
      array.splice(index, 1, newItem)
    }
  }
  return array
}

// get subarray from begin to end index
const subArray = (array, begin, end) => {
  if (Array.isArray(array)) {
    return array.slice(begin, (end + 1))
  }
  return array
}

// find missing letter on alphabet sequence
const findMissingLetter = (array) => {
  if (Array.isArray(array) && array.length > 0) {
    // generate alphabet from a to z
    const alphabet = generateAlphabet()

    // sort array asc to easy retreive
    // the correct sequence
    const values = array.sort()

    // get the correct alphabet chain
    const firstChar = values[0]
    const lastChar = values[(values.length - 1)]
    const indexStart = alphabet.indexOf(firstChar.toLowerCase() || firstChar.toUpperCase())
    const indexEnd = alphabet.indexOf(lastChar.toLowerCase() || lastChar.toUpperCase()) + 1
    const alphabetParts = alphabet.slice(indexStart, indexEnd)

    // keep only not found
    // alphabet on values
    const results = alphabetParts.filter(a =>
      !values.includes(a.toLowerCase())
      && !values.includes(a.toUpperCase()))
    if (Array.isArray(results) && results.length > 0) {
      return isLowerCase(array) ?
        results[0] :
        results[0].toUpperCase()
    }
  }
  return ''
}

// roman encoder version 1
const romanNumeralsEncoder = (number) => {
  const aM = Math.floor(number / 1000)
  const bCM = Math.floor((number % 1000) / 900)
  const cD = Math.floor(((number % 1000) % 900) / 500)
  const dCD = Math.floor((((number % 1000) % 900) % 500) / 400)
  const eC = Math.floor((((((number % 1000) % 900) % 500) % 400) / 100))
  const fXC = Math.floor(((((((number % 1000) % 900) % 500) % 400) % 100) / 90))
  const gL = Math.floor((((((((number % 1000) % 900) % 500) % 400) % 100) % 90) / 50))
  const hXL = Math.floor(((((((((number % 1000) % 900) % 500) % 400) % 100) % 90) % 50) / 40))
  const iX = Math.floor((((((((((number % 1000) % 900) % 500) % 400) % 100) % 90) % 50) % 40) / 10))
  const jIX = Math.floor(((((((((((number % 1000) % 900) % 500) % 400) % 100) % 90) % 50) % 40) % 10) / 9))
  const kV = Math.floor((((((((((((number % 1000) % 900) % 500) % 400) % 100) % 90) % 50) % 40) % 10) % 9) / 5))
  const lIV = Math.floor(((((((((((((number % 1000) % 900) % 500) % 400) % 100) % 90) % 50) % 40) % 10) % 9) % 5) / 4))
  const mI = Math.floor(((((((((((((number % 1000) % 900) % 500) % 400) % 100) % 90) % 50) % 40) % 10) % 9) % 5) % 4))

  const totale = aM + bCM + cD + dCD + eC + fXC + gL + hXL + iX + jIX + kV + lIV + mI
  const results = new Array(totale)
  results.fill('M', 0, aM)
  results.fill('CM', aM, aM + bCM)
  results.fill('D', aM + bCM, aM + bCM + cD)
  results.fill('CD', aM + bCM + cD, aM + bCM + cD + dCD)
  results.fill('C', aM + bCM + cD + dCD, aM + bCM + cD + dCD + eC)
  results.fill('XC', aM + bCM + cD + dCD + eC, aM + bCM + cD + dCD + eC + fXC)
  results.fill('L', aM + bCM + cD + dCD + eC + fXC, aM + bCM + cD + dCD + eC + fXC + gL)
  results.fill('XL', aM + bCM + cD + dCD + eC + fXC + gL, aM + bCM + cD + dCD + eC + fXC + gL + hXL)
  results.fill('X', aM + bCM + cD + dCD + eC + fXC + gL + hXL, aM + bCM + cD + dCD + eC + fXC + gL + hXL + iX)
  results.fill('IX', aM + bCM + cD + dCD + eC + fXC + gL + hXL + iX, aM + bCM + cD + dCD + eC + fXC + gL + hXL + iX + jIX)
  results.fill('V', aM + bCM + cD + dCD + eC + fXC + gL + hXL + iX + jIX, aM + bCM + cD + dCD + eC + fXC + gL + hXL + iX + jIX + kV)
  results.fill('IV', aM + bCM + cD + dCD + eC + fXC + gL + hXL + iX + jIX + kV, aM + bCM + cD + dCD + eC + fXC + gL + hXL + iX + jIX + kV + lIV)
  results.fill('I', aM + bCM + cD + dCD + eC + fXC + gL + hXL + iX + jIX + kV + lIV, aM + bCM + cD + dCD + eC + fXC + gL + hXL + iX + jIX + kV + lIV + mI)

  return results.join('')
}

// roman encoder version 2
const romanNumeralsEncoder2 = (number) => {
  // init
  const romanDividers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const romanDividersValues = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  const romanDividersCoefs = new Array(romanDividers.length)

  // calculate dividers coefs
  let value = number
  romanDividers.reduce((prev, current, index) => {
    // particular cases
    romanDividersCoefs[(index - 1)] = Math.floor((value / prev))
    if (index === 1) {
      romanDividersCoefs[0] = Math.floor((value / prev))
    } else if ((index + 1) === romanDividersCoefs.length) {
      romanDividersCoefs[index] = Math.floor((value % prev))
    }

    // update value
    value = Math.floor((value % prev))
    return current
  })
  const total = romanDividersCoefs.reduce((a, b) => a + b)
  const results = new Array(total)
  let begin = 0
  romanDividersCoefs.map((val, index) => {
    results.fill(romanDividersValues[index], begin)
    begin += val
    return value
  })
  return results.join('')
}

const reduceArray = (array, matrix) => {
  let snailArray = Object.assign(array)
  if (snailArray && snailArray.length > 0) {
    if (snailArray.length > 1) {
      matrix.push(...snailArray.shift())
      snailArray.map(leftArray => matrix.push(leftArray.pop()))
      matrix.push(...snailArray.pop().reverse())
      snailArray.reverse().map(lastArray => (matrix.push(lastArray.shift())))
      snailArray = snailArray.reverse()
    } else {
      matrix.push(...snailArray.shift().reverse())
    }
    reduceArray(snailArray, matrix)
  }
  return matrix
}

const snail = (array) => {
  return reduceArray(array, [])
}


const inventory = [
  { type: 'machine', value: 5000 },
  { type: 'machine', value: 650 },
  { type: 'duck', value: 10 },
  { type: 'furniture', value: 1200 },
  { type: 'machine', value: 77 },
]

// array examples
const HArray = () => {
  console.log('generateAlphabet Array: ', generateAlphabet())
  console.log('find missing letter on alphabet sequence : ', findMissingLetter(['A', 'D', 'B', 'E']))
  console.log('isLowerCase Array: ', isLowerCase(['A', 'a', 'B']))
  console.log('isLowerCase Array: ', isLowerCase(['A', 'C', 'B']))
  console.log('isLowerCase Array: ', isLowerCase(['A', 'D', 'B']))
  console.log('isLowerCase Array: ', isLowerCase(generateAlphabet()))
  const array = [1, 2, -2, -1, -4, 3, 4, 5, 6, 7, 0]
  let arrayPositive = [4, 8, 9, 12, 7]
  console.log('input Array: ', array)
  console.log('input Array Positive: ', arrayPositive)
  arrayPositive = modifyArrayValues(arrayPositive)
  console.log('modify Array values Positive: ', arrayPositive)
  console.log('check if all items are positive array : ', isAllItemsPositive(array))
  console.log('check if all items are positive arrayPositive: ', isAllItemsPositive(arrayPositive))
  console.log('sort Array: ', sortArray(array))
  console.log('add Array digits: ', addArrayDigits(array))
  console.log('multiply Array digits: ', multiplyArrayDigits(array))
  console.log('pow Array digits by 2: ', powDigits(array, 2))
  console.log('decompose number to array digits: ', decomposeDigit(78961))
  console.log('array difference: ', arrayDifference(array, arrayPositive))
  console.log('remove Item 7 form array : ', removeItem(array, 7))
  console.log('input Array after : ', array)
  console.log('input Array Positive before : ', arrayPositive)
  console.log('replace Item 14 with 25 form Positive : ', replaceItem(arrayPositive, 14, 25))
  console.log('input Array Positive after: ', arrayPositive)
  console.log('subArray from array no args : ', subArray(array))
  console.log('subArray from array (from : 3, end : 6) : ', subArray(array, 3, 6))
  console.log('subArray from array (from : 9, end : 26) : ', subArray(array, 9, 26)) // not crash even exceed array length
  console.log('roman encode : ', romanNumeralsEncoder2(16))
  console.log('format seconds duration : ', HDateUtils.formattedDateFromSeconds(99878))

  const valuesInventory = inventory.map(item => item.value)
  console.log('valuesInventory : ', valuesInventory)

  const totalMachineValue = valuesInventory.reduce((prev, next) => prev + next)
  console.log('totalMachineValue : ', totalMachineValue)
}

export default HArray
