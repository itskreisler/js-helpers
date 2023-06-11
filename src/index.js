import b64 from './fn/b64.js'
import jsonPrettier from './fn/json_prettier.js'
import normalize from './fn/normalize.js'
import createApi from './fn/create_api.js'
import stripHtmlTags from './fn/strip_html_tags.js'

/**
 *
 * @typedef {object} HelpersTypes
 * @property {import('./fn/json_prettier.js').jsonPrettier} jsonPrettier - Utility function to prettify a JSON object.
 * @property {import('./fn/b64.js').utf8Tob64} utf8Tob64 - Utility function to convert a UTF-8 string to base64.
 * @property {import('./fn/b64.js').b64Toutf8} b64Toutf8 - Utility function to convert a base64 string to UTF-8.
 * @property {import('./fn/normalize.js').normalize} normalize - Utility function to normalize a string.
 * @property {import('./fn/create_api.js').createApi} createApi - Utility function to create an API.
 * @property {import('./fn/strip_html_tags.js').stripHtmlTags} stripHtmlTags - Utility function to strip HTML tags.
 */

/**
 * @type {HelpersTypes}
 */
const helpers = {
  jsonPrettier,
  utf8Tob64: b64.utf8Tob64,
  b64Toutf8: b64.b64Toutf8,
  normalize,
  createApi,
  stripHtmlTags
}
// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default helpers
const _jsonPrettier = jsonPrettier
export { _jsonPrettier as jsonPrettier }
const _utf8Tob64 = b64.utf8Tob64
export { _utf8Tob64 as utf8Tob64 }
const _b64Toutf8 = b64.b64Toutf8
export { _b64Toutf8 as b64Toutf8 }
const _normalize = normalize
export { _normalize as normalize }
const _createApi = createApi
export { _createApi as createApi }
const _stripHtmlTags = stripHtmlTags
export { _stripHtmlTags as stripHtmlTags }
