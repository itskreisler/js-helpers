const stripHtmlTags = (str, exp = /<[^>]*>/g) => {
  if ((str === null) || (str === '') || typeof str === 'undefined') { return String('') } else { str = str.toString() }
  return str.replace(exp, '')
}

module.exports = stripHtmlTags
