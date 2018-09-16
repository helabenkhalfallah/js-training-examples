// es6 Generators concepts
// https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5
// http://exploringjs.com/es6/ch_generators.html
import axios from 'axios'
import co from 'co'

// co return a promise so we can easily
// then/catch
// co(genFn) - co takes a generator function and returns a promise.
// co.wrap(genFn) - co.wrap works like co except it returns
// a function that returns a promise.
const runPromiseWorker = worker => co(worker)
const runIteratorWorker = co.wrap(worker => worker())

// run multiple workers
function* multiRunners(workers) {
  try {
    // yield with promise : yield Promise()
    // we should transform generator function
    // to a promise ti be able to call yield
    const wokersPromises = workers.map(worker => runPromiseWorker(worker))
    const response = yield Promise.all(wokersPromises)
    return response
  } catch (error) {
    return error
  }
}
const runWorkers = workers => runPromiseWorker(multiRunners(workers))


// fetch user worker
function* fetchUsersWorker() {
  try {
    const users = yield axios.get('http://localhost:3004/users')
    return users
  } catch (error) {
    return error
  }
}

// fetch quotes worker
function* fetchQuotesWorker() {
  try {
    const quotes = yield axios.get('http://localhost:3004/quotes')
    return quotes
  } catch (error) {
    return error
  }
}

// runner
const fetchUsersRunner = (worker) => {
  const iterator = worker()
  const run = (arg) => {
    const result = iterator.next(arg)
    if (result.done) {
      return result.value
    }
    return Promise.resolve(result.value).then(run)
  }
  return run()
}


// generator sample
const HGenerators = () => {
  // way 1
  fetchUsersRunner(fetchUsersWorker)

  // // way2 with co
  runIteratorWorker(fetchUsersWorker)
    .then(data => console.log('HGenerators users runIteratorWorker data : ', data))
    .catch(error => console.log('HGenerators users runIteratorWorker error : ', error))

  // runIteratorWorker(fetchQuotesWorker)
  //   .then(data => console.log('HGenerators quotes runIteratorWorker data : ', data))
  //   .catch(error => console.log('HGenerators quotes runIteratorWorker error : ', error))

  // mutliple yield
  runWorkers([fetchUsersWorker, fetchQuotesWorker])
    .then((data) => {
      console.log('HGenerators mutliple data : ', data)
      console.log('HGenerators mutliple users : ', data[0].data)
      console.log('HGenerators mutliple quotes : ', data[1].data)
    })
    .catch(error => console.log('HGenerators mutliple : ', error))
}

export default HGenerators
