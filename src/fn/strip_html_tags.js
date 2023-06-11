const stripHtmlTags = (str, exp = /<[^>]*>/g) => {
  if ((str === null) || (str === '') || typeof str === 'undefined') { return String('') } else { str = str.toString() }
  return str.replace(exp, '')
}

export default stripHtmlTags
const _stripHtmlTags = stripHtmlTags
export { _stripHtmlTags as stripHtmlTags }
