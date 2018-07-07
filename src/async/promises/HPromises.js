// es6 Promises concepts
import fetch from 'node-fetch'

// Promises http fetch users
const fetchUsers = () => {
  fetch('http://localhost:3004/users')
    .then((json) => {
      console.log('response json : ', json)
    })
    .catch((error) => {
      console.log('error : ', error)
    })
}

// promise examples
const HPromises = () => {

  // promise fetch user
  fetchUsers()
}

export default HPromises
