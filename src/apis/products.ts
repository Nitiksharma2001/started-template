import { instance } from './config'

export async function fetchProducts() {
  try {
    const response = await instance({
      method: 'get',
      url: '/productss',
    })

    const { statusText } = response

    if (statusText == 'OK') {
      const { data } = response
      console.log(data)
    }
  } catch (err) {
    // console.log(err.message)
  }
}
