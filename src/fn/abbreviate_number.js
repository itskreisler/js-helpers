const abbreviateNumber = (number) => {
  const abbreviations = ['k', 'M', 'B', 'T']
  for (let i = abbreviations.length - 1; i >= 0; i--) {
    const abbreviation = abbreviations[i]
    const abbreviationValue = Math.pow(10, (i + 1) * 3)
    if (number >= abbreviationValue) {
      return `${(number / abbreviationValue).toFixed(1)}${abbreviation}`
    }
  }
  return number.toString()
}
module.exports = abbreviateNumber
