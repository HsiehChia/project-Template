import axios from 'axios'
import { isEmpty } from 'lodash'
import Alert from '../utils/Alert'
import themeConfig from '../../themeConfig'
import B3Storage from '../utils/B3Storage'

const b3request = axios.create({
  baseURL: themeConfig.apiBaseUrl,
  timeout: 1000 * 10 * 60 * 5,
})

b3request.interceptors.request.use(config => {
  config.headers = {
    ...config.headers,
    authToken: B3Storage.B3B2BToken.value,
  }
  if (config.params && config.params.orderBy) {
    config.params = {
      ...config.params,
    }
  }
  return config
})

b3request.interceptors.response.use(resp => {
  const {
    code,
    meta,
  } = resp.data

  let { data, message } = resp.data

  if (!isEmpty(resp.data) && resp.headers['content-type'] === 'text/csv') {
    return resp.data
  }

  const {
    params: {
      SHOWERROR = true,
    } = {},
  } = resp.config

  if (meta) {
    message = meta.errors || meta.message
    data = { data, meta }
  }

  if (code !== 200) {
    window.B3Spinner.hide()

    const { data: realData, meta } = data
    const errorData = realData || data
    // if there are any specific error messages list in data object, need show them here
    let specificMsg = ''
    if (errorData && Object.keys(errorData).length) {
      specificMsg += Object.values(errorData).join(';\n')
    }

    SHOWERROR && Alert.error(specificMsg || message)
    return Promise.reject(meta || resp.data)
  }

  return data
})

export default b3request
