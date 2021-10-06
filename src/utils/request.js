import axios from 'axios'
import JsSHA from 'jssha'

const instance = axios.create({
  baseURL: 'https://ptx.transportdata.tw/MOTC',
  headers: getAuthorizationHeader(),
  timeout: 10000
})

function getAuthorizationHeader () {
  const AppID = 'd0a8022abffc4c2d82104a0128adab19'
  const AppKey = '48rWllHQZMD1iwHAvU6V_L2YUMY'
  const GMTString = new Date().toGMTString()
  const ShaObj = new JsSHA('SHA-1', 'TEXT')
  ShaObj.setHMACKey(AppKey, 'TEXT')
  ShaObj.update('x-date: ' + GMTString)
  const HMAC = ShaObj.getHMAC('B64')
  const Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`
  return { Authorization, 'X-Date': GMTString }
}

export const get = (url) => {
  return new Promise((resolve, reject) => {
    instance.get(url).then((response) => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}
