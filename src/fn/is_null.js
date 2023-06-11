const isNull = (obj) => {
  return (typeof valor === 'object' && obj === null) || Object.is(obj, null)
}
export default isNull
const _isNull = isNull
export { _isNull as isNull }
