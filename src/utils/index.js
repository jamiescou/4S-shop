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
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
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
export default {
  formatNumber,
  formatTime,
  obj2style
}
