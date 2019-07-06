import Jsonp from 'jsonp'

export default class HTTP {
  static Jsonp(options) {
    return new Promise((resolve, reject) => {
      Jsonp(options.url, {
        params: 'callback'
      }, function (err, res) {
        if (res.status === 'success') {
          resolve(res)
        } else {
          reject(res.message)
        }
      })
    })
  }
} 