/**
 *
 * @param {object.<string, string>} obj  - Objeto a más bonito
 * @param {Function} [replacer=null] - función a más bonita
 * @param {number} [space=2] - espacio a más bonito
 * @returns {string} objeto más bonitoto
 */
const jsonPrettier = (obj, replacer = null, space = 2) => JSON.stringify(obj, replacer, space)
export default jsonPrettier
const _jsonPrettier = jsonPrettier
export { _jsonPrettier as jsonPrettier }
