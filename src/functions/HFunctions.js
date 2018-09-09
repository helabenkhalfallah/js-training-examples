

// sum function
// take two arguments and return the sum
const sum = a => b => a + b

// sub function
// take two arguments and return the sub
const sub = a => b => a - b

// mul function
// take two arguments and return the prod
const mul = a => b => a * b

const comments = [
  {
    id: 1,
    note: 4,
    name: 'Hela Ben Khalfallah',
    text: 'Awesome 1',
    img: 'http://example.com/img/luke.jpg',
    categorie: 'nature',
  }, {
    id: 4,
    note: 5,
    name: 'Hela Ben Khalfallah',
    text: 'Awesome 4',
    img: 'http://example.com/img/luke.jpg',
    categorie: 'nature',
  }, {
    id: 2,
    note: 10,
    name: 'Hela Ben Khalfallah',
    text: 'Awesome 2',
    img: 'http://example.com/img/luke.jpg',
    categorie: 'nature',
  }, {
    id: 3,
    note: 12,
    name: 'Hela Ben Khalfallah',
    text: 'Awesome 3',
    img: 'http://example.com/img/luke.jpg',
    categorie: 'human',
  }]


// HOR functions
// for an x input data and two function f and g
// output : g(f(x))
// like examples:
// 1 : filter and sort an array
// 2: map and reduce
// Note : f & g can be a compose function also
// if the were a compatible inputs/outputs
// like examples : filter/sort and reduce
// the result of filter and sort is an array
// so we can apply reduce on it
const compose = x => f => g => g(f(x))
const identity = x => x

// we want to filter comment
// related to nature categorie and having image
// we sort the result by id
// filter
const filterComments = data => data.filter(comment => comment.categorie === 'nature')
const sortComments = data => data.sort((item, next) => item.id > next.id)
const reduceComments = data => data.reduce((total, item) => total + item.note, 0)

const HFunctions = () => {
  console.log('HFunctions sum(10)(11) : ', sum(10)(11))
  console.log('HFunctions sub(12)(11) : ', sub(12)(11))
  console.log('HFunctions mul(4)(2) : ', mul(4)(2))

  // filter & sort
  console.log('HFunctions filterComments : ', filterComments(comments))
  console.log('HFunctions sortComments : ', sortComments(comments))

  // composed HOR
  // we will make filter, sort and reduce
  // the result of inside compose is an array so we can
  // apply reduce on it
  // the g function is the identity : x => x
  // we reduce the result of filter and sort
  // to calculate note sum
  console.log('------------------------------')
  const arrayManipulation = compose(compose(comments)(filterComments)(sortComments))(reduceComments)(identity)
  console.log('HFunctions arrayManipulation : ', arrayManipulation)
}

export default HFunctions
