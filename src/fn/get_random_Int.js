const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
}
export default getRandomInt
const _getRandomInt = getRandomInt
export { _getRandomInt as getRandomInt }
