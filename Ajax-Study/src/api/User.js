import Base from './Base'
import b3fetch from './b3fetch'
import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8080'

export const getUserApi = () => axios.get(baseUrl + '/user')

export default class User extends Base {
  constructor() {
    super()
  }
  getBCToken(url) {
    fetch(url, {
      method: 'GET',
      params: {
        app_client_id: 'npjs1ubfnbxqqhmjxazbfy0cosfq4s4',
      },
    }).then(response => {
      if (response.status === 200)
        console.log(response)
    })
      .catch((err) => {
        console.log(err)
        reject(err)
      })
  }

  getBCTokenByAxios(url) {
    axios
      .get(url, {
        params: {
          app_client_id: 'npjs1ubfnbxqqhmjxazbfy0cosfq4s4',
        },
      }).then(response => {
        if (response.status === 200)
          console.log(response)
      })
      .catch((err) => {
        console.log(err)
        reject(err)
      })
  }

  getUserApi(baseUrl) {
    axios.get(baseUrl + '/api/v2/companies/addresses/permission')
      .then(response =>
        console.log(response)
      )
      .catch(err => {
        console.log(err)
      })
  }

  fetchUserApi(baseUrl) {
    fetch(baseUrl + '/api/v2/companies/addresses/permission', {
      method: 'GET',
    }).then(response => {
      console.log(response)
    }).catch(err => {
      console.log(err)
    })
  }

  b3fetchUserApi(baseUrl) {
    b3fetch(baseUrl + '/api/v2/companies/addresses/permission', {
      method: 'GET'
    }).then(response => {
      console.log(response)
    })
  }
}