const arrayShuffleV1 = (array) => {
  return array.reduce((shuffled, _, index) => {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]]
    return shuffled
  }, [...array])
}
const arrayShuffleV2 = (array) => {
  return array.sort(() => Math.random() - 0.5)
}
module.exports = arrayShuffleV1
module.exports.arrayShuffleV1 = arrayShuffleV1
module.exports.arrayShuffleV2 = arrayShuffleV2
