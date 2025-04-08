import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://dummyjson.com',
})

instance.interceptors.response.use(
  function (config) {
    return config
  },
  function (error) {}
)
