const isNull = (obj) => {
  return (typeof valor === 'object' && obj === null) || Object.is(obj, null)
}
module.exports = isNull
