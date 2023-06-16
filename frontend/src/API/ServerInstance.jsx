// const baseURL = 'https://gcms.techjainsupport.co.in/api/'
// export const baseURL = 'http://localhost:8000/api/'
export const baseURL = 'http://:16.171.84.88:5000/api/'

let token = ''
if (localStorage.getItem('token')) {
  token = JSON.parse(localStorage.getItem('token')).access.token
}
let headers = {
  'Content-Type': 'application/json',

  Authorization: `Bearer ${token}`
}

export const serverInstance = (path, method = 'get', payload, token) => {
  return new Promise((resolve, reject) => {
    let fetchOptions = {
      method,
      headers
    }
    if (payload) fetchOptions.body = JSON.stringify(payload)
    fetch(baseURL + path, fetchOptions)
      .then(res => resolve(res.json()))
      .catch(err => reject(err))
  })
}
