// es6 Spread concepts

// spread function arguments
const spreadFunctionArgs = (x, y, ...args) => {
  console.log('x : ', x)
  console.log('y : ', y)
  console.log('args : ', args)
}

const HSpread = () => {
  // spread a simple array
  const simpleArray = ['a', 'b', 'c', 'd', 'e']
  const spreadSimpleArray = [...simpleArray, 'z', 't']
  console.log('spredSimpleArray : ', spreadSimpleArray)

  // spread function arguments
  // make an array from the rest of args
  spreadFunctionArgs(1, 2, simpleArray) // args :  [ [ 'a', 'b', 'c', 'd', 'e' ] ]
  spreadFunctionArgs(1, 2, ...simpleArray) // args :  [ 'a', 'b', 'c', 'd', 'e' ]
  spreadFunctionArgs(1, 2, 3, 4, 5, 6) // args :  [ 3, 4, 5, 6 ]

  // spread an objects
  const { x, y, ...z } = {
    x: 1,
    y: 2,
    a: 3,
    b: 4,
  }
  console.log('x : ', x)
  console.log('y : ', y)
  console.log('z : ', z)

  const n = { x, y, ...z }
  console.log('n : ', n)
}

export default HSpread
