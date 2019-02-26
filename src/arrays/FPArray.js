// find item
const findItem = (tab, query) =>
  tab.filter(item => item === query)

// compare two array and return differences
// symetric difference
// return elements from tab1 that don't exist
// on tab2 and elements from tab2
// that don't exist on tab1
const arrayDifference = (tab1, tab2) => [
  ...tab1.filter(item => findItem(tab2, item).length === 0),
  ...tab2.filter(item => findItem(tab1, item).length === 0),
]

// array intersections
// find common elements
const arrayIntersection = (tab1, tab2) =>
  tab1.filter(item => findItem(tab2, item).length > 0)

// Union : merge arrays
// and eliminate duplication
const arrayUnion = (tab1, tab2) => [
  ...new Set([...tab1, ...tab2]),
]

// intersection + difference
// intersection is like a Set()
// to eliminate duplicated elements
const arrayUnion2 = (tab1, tab2) => [
  ...arrayIntersection(tab1, tab2),
  ...arrayDifference(tab1, tab2),
]

// keep only string
const keepOnlyString = tab =>
  tab.filter(item => (typeof item === 'string'))

// count number of elements that are not string
const totalNotString = tab =>
  tab.reduce((total, amount) =>
    ((typeof amount !== 'string') ? total + 1 : total), 0)

// deep find item
const deepFindItem = (tab, query) =>
  tab.filter(item => item.name === query.name)

// deep arrays difference
// 1. find tab1 difference
// 2. find tab2 difference
const deepArrayDifference = (tab1, tab2) => [
  ...tab1.filter(item => deepFindItem(tab2, item).length === 0),
  ...tab2.filter(item => deepFindItem(tab1, item).length === 0),
]

// deep array intersections
// find common elements
const deepArrayIntersection = (tab1, tab2) =>
  tab1.filter(item => deepFindItem(tab2, item).length > 0)

// 1. find common elements tab1 & tab2
// 2. find tab1 difference
// 3. find tab2 difference
// 4. merge result
// intersection + difference
// intersection is like a Set()
// to eliminate duplicated elements
const deepArrayUnion = (tab1, tab2) => [
  ...deepArrayIntersection(tab1, tab2),
  ...deepArrayDifference(tab1, tab2),
]

// compose function
const compose = x => y => f => g => g(f(x, y))

// modify array values
const modifyArrayValues = array => (array.map(item => item + 2))

// check if all items in array
// satisfy a specific condition
const isAllItemsPositives = array =>
  (array.every(item => item > 0))


// array functional programing
const FPArray = () => {
  // primitive array type
  const tab1 = [1, 2, 3, 12, 4, 5, 'A', 'B', 'Qwerty']
  const tab2 = [1, 2, 78, 3, 189]
  console.log('Differences : ', arrayDifference(tab1, tab2)) // [ 12, 4, 5, 'A', 78, 189 ]
  console.log('Intersection : ', arrayIntersection(tab1, tab2)) // [ 1, 2, 3 ]
  console.log('Union : ', arrayUnion(tab1, tab2)) // [ 1, 2, 3, 12, 4, 5, 'A', 78, 189 ]
  console.log('Union 2 : ', arrayUnion2(tab1, tab2)) // [ 1, 2, 3, 12, 4, 5, 'A', 78, 189 ]
  console.log('Keep only string : ', keepOnlyString(tab1)) // [ 1, 2, 3, 12, 4, 5, 'A', 78, 189 ]
  console.log('Count number of elements that are not string (tab1): ', totalNotString(tab1)) // 6
  console.log('Count number of elements that are not string (tab2): ', totalNotString(tab2)) // 5

  // chaining operations
  // arrayUnion + totalNotString
  const unionTotalNotString = (array1, array2) => totalNotString(arrayUnion(array1, array2))
  console.log('union total not string : ', unionTotalNotString(tab1, tab2)) // 8

  // compose : chaining operations
  const composeUnionTotalNotString = compose(tab1)(tab2)(arrayUnion)(totalNotString)
  console.log('union total not string 2: ', composeUnionTotalNotString) // 8

  // change array
  const tab3 = [1, 2, -2, -1, -4, 3, 4, 5, 6, 7, 0]
  const modifiedArray = modifyArrayValues(tab3)
  console.log('Modified Array : ', modifiedArray)
  // [ 3, 4, 0, 1, -2, 5, 6, 7, 8, 9, 2 ]

  // check if all array item statisfy
  // a specific condition
  const tab4 = [1, 2, -2, -1, -4, 3, 4, 5, 6, 7, 0]
  console.log('is All Items Positives : ', isAllItemsPositives(tab4))
  //false

  const arrayPositive = [4, 8, 9, 12, 7]
  console.log('is All Items Positives : ', isAllItemsPositives(arrayPositive))
  // true

  // deep array
  const tabObject1 = [{
    name: 'Héla',
    lastName: 'Ben Khalfallah',
  },
  {
    name: 'Steve',
    lastName: 'Jobs',
  },
  {
    name: 'Pablo',
    lastName: 'Picasso',
  }]
  const tabObject2 = [{
    name: 'Héla',
    lastName: 'Ben Khalfallah',
    note: 14,
  },
  {
    name: 'Dan',
    lastName: 'Abramov',
    note: 17,
  },
  {
    name: 'Steve',
    lastName: 'Jobs',
    note: 16,
  },
  {
    name: 'Albert',
    lastName: 'Einsten',
    note: 18,
  }]
  console.log('Deep Difference : ', deepArrayDifference(tabObject1, tabObject2))
  // [ { name: 'Pablo', lastName: 'Picasso' },
  // { name: 'Albert', lastName: 'Einsten' },
  // { name: 'Dan', lastName: 'Abramov' } ]

  console.log('Deep Intersection : ', deepArrayIntersection(tabObject1, tabObject2))
  // [ { name: 'Héla', lastName: 'Ben Khalfallah' },
  // { name: 'Steve', lastName: 'Jobs' } ]

  console.log('Deep Union : ', deepArrayUnion(tabObject1, tabObject2))
  // [ { name: 'Héla', lastName: 'Ben Khalfallah' },
  // { name: 'Steve', lastName: 'Jobs' },
  // { name: 'Pablo', lastName: 'Picasso' },
  // { name: 'Albert', lastName: 'Einsten' },
  // { name: 'Dan', lastName: 'Abramov' } ]

  // chaining operations
  const sortChain = tabObject2
    .filter(item => item.name.toLowerCase().includes('e')) // Albert & Steve
    .sort((item, next) => {
      if (item.name < next.name) { return -1 }
      if (item.name > next.name) { return 1 }
      return 0
    })
  console.log('Sort Chain : ', sortChain)
  // [ { name: 'Albert', lastName: 'Einsten', note: 18 },
  // { name: 'Steve', lastName: 'Jobs', note: 16 } ]

  const totalChain = tabObject2
    .filter(item => item.name.toLowerCase().includes('a')) // Hela, Dan & Albert
    .reduce((total, item) => total + item.note, 0)
  console.log('Total Chain : ', totalChain) // 49 = 18 + 14 + 17
}

export default FPArray

