

function* generatorFunction() {
  console.log('This will be executed first.')
  yield 'Hello, '

  console.log('I will be printed after the pause')
  yield 'World!'
}

function* naturalNumbers() {
  let num = 1
  while (true) {
    yield num
    num += 1
  }
}

function* simple() {
  yield 1
  return 2
}

function* operation(x) {
  const y = 2 * (yield (x + 1))
  const z = yield (y / 3)
  return (x + y + z)
}

function* cleanUp() {
  try {
    yield 1
    yield 2
    yield 3
  } finally {
    console.log('cleanup!')
  }
}

function* handleErrors() {
  try {
    yield 1
  } catch (error) {
    console.log('Handle Errors : ', error)
  }
  yield 2
  throw new Error('Hello!')
}


// generator sample
const HGenerators = () => {
  const generatorObject = generatorFunction()
  console.log(generatorObject.next().value) // Line 4 : This will be executed first. Hello,
  console.log(generatorObject.next().value) // Line 5 : I will be printed after the pause World!
  console.log(generatorObject.next().value) // Line 6 : undefined

  // iterate
  // lazy evaluation
  const numbers = naturalNumbers()
  console.log(numbers.next().value)
  console.log(numbers.next().value)
  console.log(numbers.next().value)

  // with return
  const itSimple = simple()
  console.log(itSimple.next()) // { value:1, done:false }
  console.log(itSimple.next()) // { value:2, done:true }

  // math operation
  const itOperation = operation(5)

  // note: not sending anything into `next()` here
  console.log(itOperation.next()) // y: { value:6, done:false }
  console.log(itOperation.next(12)) // z : { value:8, done:false }
  console.log(itOperation.next(13)) // return : { value:42, done:true }

  // clean up
  const itCleanUp = cleanUp()
  console.log(itCleanUp.next()) // { value: 1, done: false }
  console.log(itCleanUp.next()) // { value: 2, done: false }
  console.log(itCleanUp.next()) // { value: 3, done: false }
  console.log(itCleanUp.next()) // cleanup! { value: undefined, done: true }

  // Early Completion
  const itEarlyCompletionCleanUp = cleanUp()
  console.log(itEarlyCompletionCleanUp.next()) // { value: 1, done: false }
  console.log(itEarlyCompletionCleanUp.return(23)) // cleanup! { value: 23, done: true }

  // Early Abort
  const itEarlyAbortCleanUp = cleanUp()
  console.log(itEarlyAbortCleanUp.next())
  try {
    itEarlyAbortCleanUp.throw('Trigger Exception')
  } catch (err) {
    console.log('error : ', err) // error :  Trigger Exception
  }
  console.log(itEarlyAbortCleanUp.next()) // { value: undefined, done: true }

  // handle errors
  console.log('------ handle errors ------')
  const itHandleErrors = handleErrors()
  console.log(itHandleErrors.next()) // { value: 1, done: false }
  try {
    itHandleErrors.throw('Hi errors!') // Hi errors!
    console.log(itHandleErrors.next()) // execute throw ('Hello!')
    console.log('never gets here')
  } catch (err) {
    console.log(err) // Hello!
  }
  console.log('------ end handle errors ------')
}

export default HGenerators
