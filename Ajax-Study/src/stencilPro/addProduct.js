import axios from 'axios'
import getCart from './getCart'
import triggerCartNumber from './triggerCartNumber'
import Alert from '../utils/Alert'
import * as locales from '../locales'

export function addProductsToCart(url, data) {
  return axios.post(url, data).then(response => Promise.resolve(response)).catch(err => {
    const {
      response: {
        status,
        data,
      },
    } = err
    if (status !== 200) {
      Alert.error(data?.detail || data?.title || locales.tips.globalError)
      window.B3Spinner.hide()
    }
    return Promise.reject(err)
  })
}

export default async function (data) {
  const res = await getCart()
  const url = res[0] ? `/api/storefront/carts/${res[0].id}/items` : '/api/storefront/carts'

  await addProductsToCart(url, data)
  // await axios.post(url, data)
  triggerCartNumber()
}
