// es6 array new concepts


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


// async await examples
const HArray = () => {
  const array = [1, 2, -2, -1, -4, 3, 4, 5, 6, 7, 0]
  console.log('input Array: ', array)
  console.log('sort Array: ', sortArray(array))
  console.log('add Array digits: ', addArrayDigits(array))
  console.log('multiply Array digits: ', multiplyArrayDigits(array))
  console.log('pow Array digits by 2: ', powDigits(array, 2))
  console.log('decompose number to array digits: ', decomposeDigit(78961))
  console.log('array difference: ', arrayDifference(array, [4, 8, 9, -5]))
}

export default HArray
