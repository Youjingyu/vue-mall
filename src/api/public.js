import axios from 'axios'
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www=form-urlencoded'
export default {
  fetchGet (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get('https://www.tiya-whale.xin:3333' + url, params).then(res => {
      // axios.get(url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  fetchPost (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.post('https://www.tiya-whale.xin:3333' + url, params).then(res => {
      // axios.post(url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
