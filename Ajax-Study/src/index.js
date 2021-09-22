import api from './api'

const b3utils = {
  api
}

window.b3utils = b3utils

export default b3utils

function JsonData() {
  console.log(b3utils.api.user.login())
}

JsonData()