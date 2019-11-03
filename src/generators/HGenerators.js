import axios from 'axios'
import co from 'co'

// fetch users
function* fetchUsers() {
  try {
    const users = yield axios.get('https://jsonplaceholder.typicode.com/users')
    return users.data
  } catch (error) {
    return error
  }
}

// fetch posts
function* fetchPosts() {
  try {
    const posts = yield axios.get('https://jsonplaceholder.typicode.com/posts')
    return [posts.data]
  } catch (error) {
    return error
  }
}

// fetch users
function* fetchUsersAndPosts() {
  try {
    const users = yield axios.get('https://jsonplaceholder.typicode.com/users')
    const posts = yield axios.get('https://jsonplaceholder.typicode.com/posts')
    return [users.data, posts.data]
  } catch (error) {
    return error
  }
}

// generator sample
const HGenerators = () => {
  // only users
  co(fetchUsers)
    .then((users) => {
      console.log('users : ', users)
      console.log('---------------------------')
    })
    .catch(error => console.log('error : ', error))


  // only posts
  co(fetchPosts)
    .then((posts) => {
      console.log('posts : ', posts)
      console.log('---------------------------')
    })
    .catch(error => console.log('error : ', error))

  // users and posts
  co(fetchUsersAndPosts)
    .then((data) => {
      console.log('data : ', data)
      console.log('---------------------------')
    })
    .catch(error => console.log('error : ', error))
}

export default HGenerators
