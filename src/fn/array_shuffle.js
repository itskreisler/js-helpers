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
export default arrayShuffleV1
const _arrayShuffleV1 = arrayShuffleV1
export { _arrayShuffleV1 as arrayShuffleV1 }
const _arrayShuffleV2 = arrayShuffleV2
export { _arrayShuffleV2 as arrayShuffleV2 }
