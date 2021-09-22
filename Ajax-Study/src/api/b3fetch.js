let requestInterceptors = [],
  responseInterceptors = []

function b3fetch(url, init = {}) {
  if (!init.method) {
    init.method = 'GET'
  }

  requestInterceptors.forEach(interceptors => {
    init = interceptors(init);
  })

  return new Promise((resolve, reject) => {
    fetch(url, init).then(res => {
      responseInterceptors.forEach(interceptors => {
        res = interceptors(res)
      })
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

b3fetch.interceptors = {
  request: {
    use: (callback) => {
      requestInterceptors.push(callback)
    },
    eject: (data) => {
      if (requestInterceptors.indexOf(data) !== -1) {
        requestInterceptors.splice(requestInterceptors.indexOf(data), 1)
      }
    }
  },
  response: {
    use: (callback) => {
      responseInterceptors.push(callback)
    },
    eject: (data) => {
      if (responseInterceptors.indexOf(data) !== -1) {
        responseInterceptors.splice(responseInterceptors.indexOf(data), 1)
      }
    }
  }
}

export default b3fetch
