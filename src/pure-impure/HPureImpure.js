// es6 Pure & Impure concepts
// A pure function is a function which:
// Given the same input, will always return the same output.
// The function always returns the same result
// if the same arguments are passed in.
// It does not depend on any state, or data,
// change during a program’s execution.
// It must only depend on its input arguments.
// Produces no side effects, it can’t alter any external state.
// One of the major benefits of using pure functions
// is they are immediately testable.
// They also makes maintaining and refactoring
// code much easier.

// pure function
const priceAfterTax = productPrice => (productPrice * 0.20) + productPrice

// impure function
const tax = 20
const calculateTax = productPrice => (productPrice * (tax / 100)) + productPrice

const HPureImpure = () => {
  console.log('-------- Pure Function --------')
  console.log(priceAfterTax(20))
  console.log('-------- Impure Function --------')
  console.log(calculateTax(30))
}

export default HPureImpure
