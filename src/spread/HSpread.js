// es6 Spread concepts
// spread vs destructing
// destructing work on left side
// spread on the right side
// right side can be :
// - function args
// - array assign, concat, push ...
// - object assign, concat ...
// http://exploringjs.com/es6/ch_parameter-handling.html#sec_spread-operator
// Rest operator: collects the remaining items of an iterable into an Array
// and is used for rest parameters and destructuring.
// Spread operator: turns the items of an iterable into
// arguments of a function call or into elements of an Array.

// spread function arguments
const spreadFunctionArgs = (x, y, ...args) => {
  console.log('x : ', x)
  console.log('y : ', y)
  console.log('args : ', args)
}

// From arguments to rest parameters
const spreadFunctionOperations = () => {
  const simpleArray = ['a', 'b', 'c', 'd', 'e']
  spreadFunctionArgs(1, 2, simpleArray) // args :  [ [ 'a', 'b', 'c', 'd', 'e' ] ]
  spreadFunctionArgs(1, 2, ...simpleArray) // args :  [ 'a', 'b', 'c', 'd', 'e' ]
  spreadFunctionArgs(1, 2, 3, 4, 5, 6) // args :  [ 3, 4, 5, 6 ]
}

// From apply() to the spread operator
// From concat() to the spread operator
const spreadArrayOperations = () => {
  // copying array like slice
  const arr = [1, 2, 3]
  const arr2 = [...arr] // like arr.slice()
  arr2.push(4)
  console.log('arr2 : ', arr2)

  // get the max & min of an array
  const numbers = [1, 25, 3, 4, 5]
  console.log('numbers : ', numbers)

  const max = Math.max(numbers) // undefined
  console.log('numbers max : ', max)

  const min = Math.min(numbers) // undefined
  console.log('numbers min : ', min)

  // correct way
  const maxNumber = Math.max(...numbers) // 25 : like Math.max.apply(Math, [1, 25, 3, 4, 5])
  console.log('numbers maxNumber : ', maxNumber)

  const minNumer = Math.min(...numbers) // 1
  console.log('numbers minNumer : ', minNumer)

  // combine array
  const tab1 = [1, 2, 3, 4, 5]
  const tab2 = [7, 8, 9, 10, 11]
  const tab3 = [...tab1, ...tab2] // [ 1, 2, 3, 4, 5, 7, 8, 9, 10, 11 ] : like arr1.concat(arr2, arr3)
  console.log('combine simple concat : ', tab3)

  // add at the end
  const tab4 = ['a', 'b', 'c']
  tab3.push(...tab4) // [ 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 'a', 'b', 'c' ] : like arr1.push.apply(arr1, arr2)
  console.log('combine push : ', tab3)

  // add at the begin
  const tab5 = ['A', 'B', 'C']
  tab3.unshift(...tab5)
  console.log('combine unshift : ', tab3) // [ 'A', 'B', ‘C’, '1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 'a', 'b', 'c' ]
}

const spreadObjectOperations = () => {
  // object concat
  // the spread operator can be used
  // to shallow copy the properties
  // from one or more objects into another object.
  const obj1 = {
    a: 1,
    b: 2,
    c: 3,
  }

  const obj2 = {
    p: 4,
    q: 5,
    r: 6,
  }

  const obj3 = {
    ...obj1,
    ...obj2,
  }
  console.log('obj3 : ', obj3) // { a: 1, b: 2, c: 3, p: 4, q: 5, r: 6 }

  // simplify Object#assign
  // clone
  const obj = { a: 1 }
  const copy = Object.assign({}, obj)
  console.log('copy : ', copy) // copy :  { a: 1 }

  const clone = { ...obj }
  console.log('clone : ', clone) // clone :  { a: 1 }

  // immutability of origin
  const objOrigin = { age: 4 }
  const objCopy = { ...objOrigin }
  objCopy.age = 1 // mutate the copy
  console.log('objCopy : ', objCopy.age) // 1 <-- changed
  console.log('objOrigin : ', objOrigin.age) // 4 <-- fixed!

  // as an object base
  const objBase = { firstName: 'Héla' }
  const copyBase = {
    ...objBase,
    lastName: 'Ben Khalfallah',
  }
  console.log('objBase : ', objBase) // objBase :  { firstName: 'Héla' }
  console.log('copyBase : ', copyBase) // copyBase :  { firstName: 'Héla', lastName: 'Ben Khalfallah' }

  // mutate copy
  // The line order maters for this to work.
  // We need lastName: 'Ben Ghalba' to come after
  // ...copyBase so the overwrite happens.
  const mutateCopyBase = {
    ...copyBase,
    lastName: 'Ben Ghalba',
  }
  console.log('copyBase : ', copyBase) // copyBase :  { firstName: 'Héla', lastName: 'Ben Khalfallah' }
  console.log('mutateCopyBase : ', mutateCopyBase) // mutateCopyBase :  { firstName: 'Héla', lastName: 'Ben Ghalba' }

  // state mutate
  const state = {
    isFavorite: true,
    isWishList: true,
  }
  const mutateState = {
    ...state,
    isFavorite: false,
  }
  console.log('state : ', state) // state :  { isFavorite: true, isWishList: true }
  console.log('mutateState : ', mutateState) // mutateState :  { isFavorite: false, isWishList: true } : mutate only isFavorite

  // mutate and extends
  const mutateExtendState = {
    ...mutateState,
    isFavorite: true,
    isLogged: false,
  }
  console.log('mutateExtendState : ', mutateExtendState) // mutateExtendState :  { isFavorite: true, isWishList: true, isLogged: false }
}

const HSpread = () => {
  // spread function
  spreadFunctionOperations()

  // spread array
  spreadArrayOperations()

  // spread object
  spreadObjectOperations()
}

export default HSpread
