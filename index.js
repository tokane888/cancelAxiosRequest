const axios = require('axios');

(async () => {
  const axiosBase = axios.create({
    baseURL: 'http://www.google.com/'
  })
  const source = axios.CancelToken.source()

  try {
    const wait = axiosBase.get('', {
      cancelToken: source.token
    })

    source.cancel('Cancel!!!')

    const response = await wait
    console.log(response.data)
    console.log(response.status)
  } catch (err) {
    if (axios.isCancel(err)) {
      console.log(`Request cancelled: ${err.message}`)
    }
  }
})()
