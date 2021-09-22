import api from './api'

const b3utils = {
  api
}

window.b3utils = b3utils

export default b3utils

const baseUrl = 'http://localhost:8000'

function TestData() {
  b3utils.api.user.getUserApi(baseUrl)
  b3utils.api.user.fetchUserApi(baseUrl)
}

TestData()