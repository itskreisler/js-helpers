const isArrayEmpty = (array) => {
  return Array.isArray(array) && array.length === 0
}
export default isArrayEmpty
const _isArrayEmpty = isArrayEmpty
export { _isArrayEmpty as isArrayEmpty }
