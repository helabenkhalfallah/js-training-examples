import Logger from '../logger/Logger'

const {
  infoLogger,
  errorLogger,
  warnLogger,
} = Logger

const isNothing = value => value === null || typeof value === 'undefined'
const Maybe = value => ({
  map: fn => (isNothing(value) ? Maybe(null) : Maybe(fn(value))),
  getOrElse: defaultValue => (isNothing(value) ? defaultValue : value),
  // we could return the value, but then we would sometimes switch functor type.
  // This way Maybe.flatten will always return a Maybe
  flatten: () => (isNothing(value) ? Maybe(null) : Maybe(value.value)),
  chain(fn) {
    return this.map(fn).flatten()
  },
  value,
})

// on a Left, catch() should apply the function,
// and return a Right to allow further mapping
const Left = value => ({
  map: fn => Left(value),
  catch: fn => Right(fn(value)),
  value,
})

// on a Right, catch() should do nothing
const Right = value => ({
  map: fn => Right(fn(value)),
  catch: () => Right(value),
  value,
})


const tryCatch = fn => (value) => {
  try {
    return Right(fn(value)) // everything went fine we go right
  } catch (error) {
    return Left(error) // oops there was an error let's go left.
  }
}

const validateEmail = (value) => {
  if (!value.match(/\S+@\S+\.\S+/)) {
    return Left(new Error('The given email is invalid'))
  }
  return Right(value)
}

const validateEmail2 = tryCatch((value) => {
  if (!value.match(/\S+@\S+\.\S+/)) {
    throw new Error('The given email is invalid')
  }
  return value
})

const get = key => value => value[key]

const validateUser = user => Maybe(user)
  .map(get('email'))
  .map(v => validateEmail2(v).catch(get('message')))

const validateUserValue = (user) => {
  const result = validateUser(user).value
  if (result === null || typeof result === 'undefined') {
    return null
  }
  return result.value
}


const NumberBox = number => ({
  map: (fn) => {
    if (typeof number !== 'number') {
      return NumberBox(NaN)
    }
    return NumberBox(fn(number))
  },
  value: number,
})


const users = [
  { name: 'aaName', lastname: 'cclastName', note: 12 },
  { name: 'ccName', lastname: 'aalastName', note: 13 },
  { name: 'bbName', lastname: 'bblastName', note: 7 },
]

// sort by criteria
const sortBy = property => (a, b) => {
  if (a[property] < b[property]) {
    return -1
  }
  if (a[property] > b[property]) {
    return 1
  }
  return 0
}

// take function and arguments
// return function(arguments)
const transform = f => (...args) => f(...args)


const FPFunctions = () => {
  const sortedByNameUsers = users.sort(sortBy('name'))
  infoLogger('sort by name: ', sortedByNameUsers)
  // sort by firstname:
  // [ { name: 'aaName', lastname: 'cclastName', note: 12 },
  // { name: 'bbName', lastname: 'bblastName', note: 7 },
  // { name: 'ccName', lastname: 'aalastName', note: 13 } ]
  const sortedByNoteUsers = users.sort(sortBy('note'))
  infoLogger('sort by note: ', sortedByNoteUsers)
  // [ { name: 'bbName', lastname: 'bblastName', note: 7 },
  // { name: 'aaName', lastname: 'cclastName', note: 12 },
  // { name: 'ccName', lastname: 'aalastName', note: 13 } ]
  const tranformMin = transform(Math.min)(3, 2, 1)
  infoLogger('tranform min: ', tranformMin)
  // 1
  const tranformSort = transform(Array.sort)(users, sortBy('name'))
  infoLogger('tranformSort name : ', tranformSort)
  // transform map
  const tab = [1, 5, 2, 3, 4]
  const transformMap = transform(Array.map)(tab, item => item * 2)
  console.log('tranform map : ', transformMap)
  // tranform map :  [ 2, 10, 4, 6, 8 ]
  // tranform reduce
  const transformReduce = transform(Array.reduce)(
    tab,
    (total, amount) => (total + amount),
  )
  console.log('transform reduce : ', transformReduce)
  // transform reduce :  15

  const compose = (f, g) => x => f(g(x))
  // operation : 2*(4+5) = 2*9 = 18
  const add = x => y => x + y
  const mult = x => y => x * y
  const identity = x => x
  const addMult = compose(identity, mult)(2)(compose(identity, add)(4)(5))
  console.log('addMult : ', addMult)
  // 18

  // functor
  const user = {
    name: 'aaName',
    lastname: 'cclastName',
    adresse: {
      zip: 94120,
      city: {
        departement: 'Paris',
        location: 'Fontenay',
      },
    },
    note: 12,
  }
  console.log('user standard city : ', user.adresse.city.departement.toUpperCase())
  // user city :  PARIS

  const user1 = {
    name: 'aaName',
    lastname: 'cclastName',
    adresse: {
      zip: 94120,
    },
    note: 12,
  }

  if (user1
    && user1.adresse
    && user1.adresse.city
    && user1.adresse.city.departement) {
    const { adresse } = user1
    const { city } = adresse
    const { departement } = city
    console.log('user departement : ', departement)
  }


  const simpleMayBe = Maybe('George')
    .map(x => x.toUpperCase())
    .map(x => `Mr. ${x}`)
    .value
  console.log('simpleMayBe : ', simpleMayBe)
  // simpleMayBe :  Mr. GEORGE

  const mayBeValue = Maybe(user.adresse)
    .map(adresse => adresse.city)
    .map(city => city.departement)
    .getOrElse('unknown address')
  console.log('user mayBeValue : ', mayBeValue)
  // user mayBeValue :  Paris

  const mayFailBeValue = Maybe(user.adresse1)
    .map(adresse1 => adresse1.city)
    .map(city => city.departement)
    .getOrElse('unknown address')
  console.log('user mayFailBeValue : ', mayFailBeValue)
  // user mayFailBeValue :  unknown address

  // either functor
  const leftValue = Left(5).map(v => v * 2).value
  console.log('leftValue : ', leftValue)
  // leftValue 5 : (v => v * 2) it not executed (safety)

  const rightValue = Right(5).map(v => v * 2).value
  console.log('rightValue : ', rightValue)
  // rightValue 10 : we excute (v => v * 2) (the correct way)

  const mail1 = validateEmail('foo@example.com')
    .map(v => `Email: ${v}`)
    .value
  console.log('mail1 : ', mail1)
  // mail1 :  Email: foo@example.com
  // valid email, return Right functor

  const mail2 = validateEmail('foo@example')
    .map(v => `Email: ${v}`)
    .value
  console.log('mail2 : ', mail2)
  // mail2 :  Error: The given email is invalid
  // invalid email, return Left functor
  // v => 'Email: ' + v is not executed

  const catchRight = Right(5)
    .catch(error => error.message)
    .value
  console.log('catchRight : ', catchRight)
  // catchRight :  5
  // catch is ignored on a right

  const catchLeft = Left(new Error('exception'))
    .catch(error => error.message)
    .value
  console.log('catchLeft : ', catchLeft)
  // catchLeft :  exception

  const emailVal1 = validateEmail2('foo@example.com')
    .map(v => `Email: ${v}`)
    .catch(get('message'))
    .value
  console.log('emailVal1 : ', emailVal1)
  // emailVal1 :  Email: foo@example.com

  const emailVal2 = validateEmail2('foo@example')
    .map(v => `Email: ${v}`)
    .catch(get('message'))
    .value
  console.log('emailVal2 : ', emailVal2)
  // emailVal2 :  The given email is invalid

  const validUser1 = validateUser({
    firstName: 'John',
    email: 'foo@example.com',
  })
  console.log('validUser1 : ', validUser1)
  // Maybe(Right('foo@example.com'))

  const validUser2 = validateUser({
    firstName: 'John',
    email: 'foo@example',
  })
  console.log('validUser2 : ', validUser2)
  // Maybe(Left('The given email is invalid'))

  const validUser3 = validateUser({
    firstName: 'John',
  })
  console.log('validUser3 : ', validUser3)
  // Maybe(null)

  const validUserVal = validateUserValue({
    firstName: 'John',
    email: 'foo@example.com',
  })
  console.log('validUserValue : ', validUserVal)
  // validUserValue :  foo@example.com

  const inValidUserVal = validateUserValue({
    firstName: 'John',
    email: 'foo@example',
  })
  console.log('inValidUserVal : ', inValidUserVal)
  // inValidUserVal: The given email is invalid

  const validateFlattenUser = user => Maybe(user)
    .map(get('email'))
    .map(v => validateEmail2(v)
      .catch(get('message')))
    .flatten()
    .getOrElse('The user has no mail')
  const validFlattenUser = validateFlattenUser({
    firstName: 'Hela',
    email: 'hela@example.com',
  })
  console.log('validFlattenUser : ', validFlattenUser)
  // validFlattenUser :  hela@example.com

  const validateChainUser = user => Maybe(user)
    .map(get('email'))
    .chain(v => validateEmail2(v)
      .catch(get('message')))
    .getOrElse('The user has no mail')
  const validChainUser = validateChainUser({
    firstName: 'Hela',
    email: 'hela@example.com',
  })
  console.log('validChainUser : ', validChainUser)
  // validChainUser :  hela@example.com

  const inValidChainUser = validateChainUser({
    firstName: 'Hela',
    email: 'hela@example',
  })
  console.log('inValidChainUser : ', inValidChainUser)
  // inValidChainUser :  The given email is invalid

  const inValidChainUser1 = validateChainUser({
    firstName: 'Hela',
  })
  console.log('inValidChainUser1 : ', inValidChainUser1)
  // inValidChainUser1 :  The user has no mail

  const numberValue = NumberBox(5)
    .map(v => v * 2)
    .map(v => v + 1)
    .value
  console.log('numberValue : ', numberValue)

  const numberIdentity = NumberBox(5).map(v => v).value
  console.log('numberIdentity : ', numberIdentity) // 5
  console.log('NumberBox(5) : ', NumberBox(5).value) // 5
}

export default FPFunctions


