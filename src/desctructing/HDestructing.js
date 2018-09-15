// es6 Destructing concepts

const HDestructing = () => {
  // split string
  // like str.split('')
  // crazy but true :))
  const [...array1] = 'Azerty' // [ 'A', 'z', 'e', 'r', 't', 'y' ]
  console.log('array1 : ', array1)

  // like str.charAt(0)
  const [firstChar] = 'Azerty' // A
  console.log('firstChar : ', firstChar)

  // string manipulation
  const [char1, char2, char3, ...char4] = 'Azerty'
  console.log('char1 : ', char1) // A
  console.log('char2 : ', char2) // z
  console.log('char3 : ', char3) // e
  console.log('char4 : ', char4) // [ 'r', 't', 'y' ]

  // spread an objects
  // ..z => REST
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
}

export default HDestructing
