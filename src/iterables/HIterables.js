// es6 Iterables concepts
/*
interface Iterable {
  [Symbol.iterator]() : Iterator;
}
interface Iterator {
  next() : IteratorResult;
}
interface IteratorResult {
  value: any;
  done: boolean;
}
The following values are iterable:
Arrays
Strings
Maps
Sets
DOM data structures
*/

// custom alphabet iterator
const alphabetIterator = () => {
  let nextIndex = 65
  return {
    next:
      () =>
        (nextIndex < 91 ?
          { value: String.fromCharCode(nextIndex++), done: false } :
          { done: true }
        ),
  }
}

// enhanced alphabet iterator
const customAlphabetIterator = {
  [Symbol.iterator]() {
    let nextIndex = 65
    return {
      // make the iterator an iterable
      [Symbol.iterator]() {
        return this
      },

      // return the next value
      next:
        () =>
          (nextIndex < 91 ?
            { value: String.fromCharCode(nextIndex++), done: false } :
            { done: true }
          ),
    }
  },
}


const HIterables = () => {
  // basic example
  const numbers = [1, 2, 3]
  const numbersIterator = numbers[Symbol.iterator]()
  console.log('HIterables numbersIterator: ', numbersIterator)
  console.log(numbersIterator.next()) // { value: 1, done: false }
  console.log(numbersIterator.next()) // { value: 2, done: false }
  console.log(numbersIterator.next()) // { value: 3, done: false }
  console.log(numbersIterator.next()) // { value: undefined, done: true }
  // as we can see above
  // the benefits of iterable is that they
  // hold context : last position without using
  // for or loop
  const charIterator = alphabetIterator()
  console.log('charIterator 1 :', charIterator.next()) // { value: 'A', done: false }
  console.log('charIterator 2 :', charIterator.next()) // { value: 'B', done: false }
  console.log('charIterator 3 :', charIterator.next(70)) // { value: 'B', done: false }
  // ...

  // string iterator
  const greeting = 'hello world'
  const greetingIterator = greeting[Symbol.iterator]()
  console.log(greetingIterator.next()) // { value: 'h', done: false }
  console.log(greetingIterator.next()) // { value: 'e', done: false }
  // ...

  // custom iterator
  const iterator = [...customAlphabetIterator]
  console.log('iterator : ', iterator) // [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ]

  // map
  iterator.map(item => console.log('map item : ', item))

  // forEach
  iterator.forEach((item, index) => {
    console.log('forEach item : ', item)
    console.log('forEach index : ', index)
  })

  // set and map
  const colors = new Set(['red', 'yellow', 'green'])
  console.log('colors entries : ', colors.entries())
  console.log('colors keys : ', colors.keys())
  console.log('colors values : ', colors.values())

  const horses = new Map([[5, 'QuickBucks'], [8, 'Chocolate'], [3, 'Filippone']])
  console.log('horses entries : ', horses.entries())
  console.log('horses keys : ', horses.keys())
  console.log('horses values : ', horses.values())

  const setAlphabetIterator = new Set(customAlphabetIterator)
  console.log('setAlphabetIterator : ', setAlphabetIterator)
}

export default HIterables
