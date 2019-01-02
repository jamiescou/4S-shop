function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  // const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('-')
  const t2 = [hour, minute].map(formatNumber).join(':')
  return `${t1} ${t2}`
}
export function formatMonth (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const t1 = [year, month].map(formatNumber).join('-')
  return `${t1}`
}
/**
 * 为样式动态赋值
 * @param {*} style
 */
export function obj2style (style) {
  let str = []
  Object.keys(style).forEach(key => {
    str.push(`${key}:${style[key]};`)
  })
  return str.join(';')
}
export function getDistance (lati1, lngi1, lati2, lngi2) {
  let lat1 = lati1 || 0
  let lng1 = lngi1 || 0
  let lat2 = lati2 || 0
  let lng2 = lngi2 || 0
  let rad1 = lat1 * Math.PI / 180.0
  let rad2 = lat2 * Math.PI / 180.0
  let a = rad1 - rad2
  let b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0
  let r = 6378137
  return (r * 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(rad1) * Math.cos(rad2) * Math.pow(Math.sin(b / 2), 2)))).toFixed(0)
}
export default {
  formatNumber,
  formatTime,
  formatMonth,
  obj2style,
  getDistance
}
