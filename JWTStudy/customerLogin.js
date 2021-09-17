const jwt = require('jsonwebtoken')
const { v4: uuidv4 } = require('uuid')

function getLoginUrl(customerId, storeHash, storeUrl, clientId, clientSecret) {
  const dateCreated = Math.round((new Date()).getTime() / 1000)
  const payload = {
    "iss": clientId,
    "iat": dateCreated,
    "jti": uuidv4(),
    "operation": "customer_login",
    "store_hash": storeHash,
    "customer_id": customerId,
  }
  let token = jwt.sign(payload, clientSecret, { algorithm: 'HS256' })
  return `${storeUrl}/login/token/${token}`
};

const clientId = "r2x8j3tn54wduq47b4efct5tqxio5z2"
const clientSecret = ""
const customerId = "189"
const storeHash = "w2vvald18z";
const storeUrl = "https://store-w2vvald18z.mybigcommerce.com"

const loginUrl = getLoginUrl(customerId, storeHash, storeUrl, clientId, clientSecret)
console.log(loginUrl)