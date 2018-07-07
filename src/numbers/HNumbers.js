// es6 Numbers concepts

const times = x => (`*${x}`)
const plus = x => (`+${x}`)
const minus = x => (`-${x}`)
const dividedBy = x => (`/${x}`)

const nine = x => (Math.floor(x ? eval(`9${x}`) : 9))
const eight = x => (Math.floor(x ? eval(`8${x}`) : 8))
const seven = x => (Math.floor(x ? eval(`7${x}`) : 7))
const six = x => (Math.floor(x ? eval(`6${x}`) : 6))
const five = x => (Math.floor(x ? eval(`5${x}`) : 5))
const four = x => (Math.floor(x ? eval(`4${x}`) : 4))
const three = x => (Math.floor(x ? eval(`3${x}`) : 3))
const two = x => (Math.floor(x ? eval(`2${x}`) : 2))
const one = x => (Math.floor(x ? eval(`1${x}`) : 1))
const zero = x => (Math.floor(x ? eval(`0${x}`) : 0))

const incrementString = (entry) => {

  // return incrementedString
  if (!entry) {
    return entry
  }

  // continue only if we have an entry
  const stringValue = entry.replace(/[\W\d_]/g, '')
  const numberValue = entry.match(/\d+/g)
  const digitCount = numberValue ? (`${numberValue}`.split('').length) : 0
  const parsedValue = numberValue ? (parseInt(numberValue, 10) + 1) : 1
  let parsedDigitCount = parsedValue ? (`${parsedValue}`.split('').length) : 0
  if (parsedDigitCount >= digitCount) {
    return `${stringValue}${parsedValue}`
  }
  let firstDigit = ''
  do {
    firstDigit += '0'
    parsedDigitCount += 1
  } while (digitCount > parsedDigitCount)
  return `${stringValue}${firstDigit}${parsedValue}`
}

// number examples
const HNumbers = () => {
  console.log(seven(times(five())))
  console.log(four(plus(nine())))
  console.log(eight(minus(three())))
  console.log(six(dividedBy(two())))
  console.log(zero(dividedBy(one())))
  console.log(incrementString('foobar99'))
  console.log(incrementString('foobar000'))
  console.log(incrementString('foo'))
  console.log(incrementString(''))
}

export default HNumbers
