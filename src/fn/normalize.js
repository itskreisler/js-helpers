/* The code defines a function called `normalize` that takes a string as input and returns a normalized
version of the string. The normalization involves replacing accented characters and special
characters with their non-accented equivalents and removing any characters that are not alphanumeric
or hyphens. The function is defined using an immediately invoked function expression (IIFE) that
creates a mapping of accented characters to their non-accented equivalents and returns a function
that uses this mapping to normalize the input string. The function also has an optional `urls`
parameter that, when set to `false`, replaces any non-alphanumeric characters with hyphens instead
of removing them. The code then exports the `normalize` function as the default export and also
exports it as `_normalize` for backwards compatibility. */
const normalize = (function () {
  const from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç!¡¿?#$%&|´´`ªº^Ç*+/¨¨=(){}[].,;:_°>\\<\"'"
  const to = 'AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc'
  const mapping = {}

  for (let i = 0, j = from.length; i < j; i++) { mapping[from.charAt(i)] = to.charAt(i) }

  return function (str, urls = true) {
    const ret = []
    for (let i = 0, j = str.length; i < j; i++) {
      const c = str.charAt(i)
      // eslint-disable-next-line no-prototype-builtins
      if (mapping.hasOwnProperty(str.charAt(i))) { ret.push(mapping[c]) } else { ret.push(c) }
    }
    return (urls) ? ret.join('') : ret.join('').replace(/[^-A-Za-z0-9]+/g, '-').toLowerCase()
  }
})()

export default normalize
const _normalize = normalize
export { _normalize as normalize }
