import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://scigroup.com.vn/app/api/store/?d=knAnswer',
  headers: {
    Accept: 'application/json'
  }
})

export const getAnswer = async () => {
  const response = await instance.get('')
  return response
}
