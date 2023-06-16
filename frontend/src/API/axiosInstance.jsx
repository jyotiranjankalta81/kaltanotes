import axios from 'axios'

// export const backendUrl = 'http://localhost:8000/api/'
// export const imageBacked = 'http://localhost:8000/'

export const backendUrl = 'http://16.171.84.88:5000/api/'
export const imageBacked = 'http://16.171.84.88:5000/'

// export const backendUrl = "https://gcms.techjainsupport.co.in/api/";
// export const imageBacked = "https://gcms.techjainsupport.co.in/";

let headers = {}
var token = ''

const gettoken = () => {
  if (localStorage.getItem('token')) {
    token = JSON.parse(localStorage.getItem('token')).access.token
  }
  return
}
gettoken()
const axiosInstance = axios.create({
  baseURL: backendUrl,
  headers
})

axiosInstance.interceptors.request.use(
  async config => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  response =>
    new Promise((resolve, reject) => {
      resolve(response)
    }),
  error => {
    if (!error.response) {
      return new Promise((resolve, reject) => {
        reject(error)
      })
    }

    if (error.response.status === 403) {
      // navigate(LOGOUT, {tokenExpired: true});
    } else {
      return new Promise((resolve, reject) => {
        reject(error)
      })
    }
  }
)

export default axiosInstance
