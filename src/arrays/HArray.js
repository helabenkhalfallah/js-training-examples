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

// modify array values
const modifyArrayValues = array => (array.map(item => item + 2))


// check if all items in array satisfay condition
const isAllItemsPositive = array => (array.every(item => item > 0))

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

// async await examples
const HArray = () => {
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
}

export default HArray
