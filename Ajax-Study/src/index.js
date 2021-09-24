import api from './api'

const b3utils = {
  api
}

window.b3utils = b3utils

export default b3utils

const baseUrl = 'https://dev-v2.bundleb2b.net'

function TestData() {
  // b3utils.api.user.getUserApi(baseUrl)
  // b3utils.api.user.b3fetchUserApi(baseUrl)
  // b3utils.api.user.fetchUserApi(baseUrl)
  b3utils.api.user.getBCToken(baseUrl + '/customer/current.jwt')
  b3utils.api.user.getBCTokenByAxios(baseUrl + '/customer/current.jwt')
}

TestData()