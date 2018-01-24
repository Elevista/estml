const arrayToMap = function (arr, fn) {
  let ret = {}
  for (let x of arr) ret[x] = fn(x)
  return ret
}

const selfClosingTags = arrayToMap([
  'area', 'base', 'br', 'col', 'command',
  'embed', 'hr', 'img', 'input', 'keygen',
  'link', 'menuitem', 'meta', 'param',
  'source', 'track', 'wbr'
], () => true)

function estml (name, attrs = {}) {
  let selfClosing = name.slice(-1) === '/'
  if (selfClosing) name = name.slice(0, -1)
  let attr = [''].concat(Object.keys(attrs).map(key => `${key}="${attrs[key]}"`)).join(' ')
  let fn = (strings, ...v) => `<${name + attr}>${strings.map((x, i) => x + (v[i] || '')).join('')}</${name}>`
  let close = selfClosing ? '/' : (selfClosingTags[name] ? '' : `></${name}`)
  fn.toString = () => `<${name + attr + close}>`
  return fn
}

module.exports = estml.estml = estml
