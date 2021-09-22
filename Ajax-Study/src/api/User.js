import Base from './Base'
import b3fetch from './b3fetch'
import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8080'

export const getUserApi = () => axios.get(baseUrl + '/user')

export default class User extends Base {
  constructor() {
    super()
  }

  getUserApi(baseUrl) {
    axios.get(baseUrl + '/user')
      .then(response =>
        console.log(response)
      )
      .catch(err => {
        console.log(err)
      })
  }

  fetchUserApi(baseUrl) {
    b3fetch(baseUrl + '/user', {
      method: 'GET'
    }).then(response => {
      console.log(response)
    })
  }
}