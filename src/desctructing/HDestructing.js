// es6 Destructing concepts
// Destructuring assignment allows for instantly
// mapping an object or array onto many variables.
// http://exploringjs.com/es6/ch_destructuring.html
// https://javascript.info/destructuring-assignment

const HDestructing = () => {
  // split string
  // like str.split('')
  // crazy but true :))
  const [...array1] = 'Azerty' // [ 'A', 'z', 'e', 'r', 't', 'y' ]
  console.log('array1 : ', array1)

  // like str.charAt(0)
  const [firstChar] = 'Azerty' // A

  // choose what to Pick and let the rest
  // split an Array
  const [char1, char2, char3, ...char4] = 'Azerty'
  console.log('firstChar : ', firstChar)
  console.log('char1 : ', char1) // A
  console.log('char2 : ', char2) // z
  console.log('char3 : ', char3) // e
  console.log('char4 : ', char4) // [ 'r', 't', 'y' ]

  const [all, year, month, day] =
    /^(\d\d\d\d)-(\d\d)-(\d\d)$/
      .exec('2999-12-31')
  console.log('all : ', all) // 2999-12-31
  console.log('year : ', year) // 2999
  console.log('month : ', month) // 12
  console.log('day : ', day) // 31

  // If you destructure an Array,
  // you can choose to only extract a prefix
  const [a, b] = ['a', 'b', 'c'] // a='a'; b='b'
  console.log('a : ', a) // a
  console.log('b : ', b) // b

  // skip
  const [, , c, d] = ['a', 'b', 'c', 'd']
  console.log('c : ', c) // c
  console.log('d : ', d) // d

  // rest operator :
  // If the operator can’t find any elements,
  // it matches its operand against the empty Array.
  // That is, it never produces undefined or null
  const [val1, val2, ...val3] = ['a']
  console.log('val1 : ', val1) // a
  console.log('val2 : ', val2) // undefined
  console.log('val3 : ', val3) // []

  // spread an objects
  // ..z => REST
  // Pick what you need :
  // const { x: x } = { x: 7, y: 3 }; // x = 7
  const { x, y, ...z } = {
    x: 1,
    y: 2,
    a: 3,
    b: 4,
  }
  console.log('x : ', x) // 1
  console.log('y : ', y) // 2
  console.log('z : ', z) // { a: 3, b: 4 }

  // new object
  // automatically map x, y and z
  const m = { x, y, z }
  console.log('m : ', m) // { x: 1, y: 2, z: { a: 3, b: 4 } }

  const n = { x, y, ...z }
  console.log('n : ', n) // { x: 1, y: 2, a: 3, b: 4 }

  // nested destructing
  // define your pattern
  const options = {
    size: {
      width: 100,
      height: 200,
    },
    items: ['Cake', 'Donut'],
    extra: true,
  }
  const {
    size: { // put size here
      width,
      height,
    },
    items: [item1, item2], // assign items here
    title = 'Menu', // not present in the object (default value is used)
  } = options
  console.log('title : ', title) // Menu
  // console.log(size) // undefined
  console.log('width : ', width) // 100
  console.log('height : ', height)// 200
  // console.log(items) // undefined
  console.log('item1 : ', item1) // Cake
  console.log('item2 : ', item2) // Donut
}

export default HDestructing
