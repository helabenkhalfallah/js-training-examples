// es6 async await concepts
import axios from 'axios'

// async await http fetch users
const fetchAwaitUsers = async () => {
  // await response of users fetch call
  const response = await axios.get('http://localhost:3004/users')

  // return result
  return response
}

// async await http fetch quotes
const fetchAwaitQuotes = async () => {
  // await response of users fetch call
  const response = await axios.get('http://localhost:3004/quotes')

  // return result
  return response
}

// async await http chaning fetch
const getUsers = () => axios.get('http://localhost:3004/users') // async fetch
const getQuotes = () => axios.get('http://localhost:3004/quotes') // async fetch
const fetchAwaitChains = async () => {
  const [usersResponse, quotesResponse] = await axios.all([getUsers(), getQuotes()])
  return { users: usersResponse, quotes: quotesResponse }
}

// async await examples
// always return data and errors
// never throw error but handle it
const HAsynAwait = () => {
  // async await http users fetch
  // console.log(' --- async await http users fetch ---')
  // console.log(' --- begin users ---')

  // fetch
  /* fetchAwaitUsers()
    .then(data => console.log('Users : ', data))
    .catch(reason => console.log(reason.message)) */

  // end
  // console.log(' --- end users ---')

  // async await http quotes fetch
  // console.log(' --- async await http quotes fetch ---')
  // console.log(' --- begin quotes ---')

  // fetch
  /* fetchAwaitQuotes()
    .then(data => console.log('Quotes : ', data))
    .catch(reason => console.log(reason.message)) */

  // end
  // console.log(' --- end quotes ---')

  // without async await
  // console.log(' --- without async await ---')
  // console.log(' --- begin pure async ---')
  /* getUsers()
    .then(data => console.log('getUsers : ', data.data))
    .catch(reason => console.log(reason.message))
  getQuotes()
    .then(data => console.log('getQuotes : ', data.data))
    .catch(reason => console.log(reason.message))
  console.log(' --- end pure async ---') */

  // async await http chaning fetch
  // spread axios result
  /* axios.all([getUsers(), getQuotes()])
    .then(axios.spread((users, quotes) => {
      console.log('all users 1 : ', users)
      console.log('all quotes 1 : ', quotes)
    }))  */

  /* fetchAwaitChains()
    .then((data) => {
      console.log('fetchAwaitChains data : ', data)
      const { users, quotes } = data
      console.log('fetchAwaitChains users : ', users)
      console.log('fetchAwaitChains quotes : ', quotes)
    })
    .catch(reason => console.log('fetchAwaitChains error : ', reason.message)) */

  // async await try/catch
  /* try {
    const response = await axios.get('http://localhost:3004/quotes')
    console.log('await response : ', response)
  } catch (error) {
    console.log('await error : ', error)
  } */
}

export default HAsynAwait
