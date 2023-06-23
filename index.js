/**
 * @author Kreisler Ramirez Sierra
 * @file Utility functions for javascript
 */

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Utility functions for javascript
 *
 * @version 3.0.0
 * @author Kreisler Ramirez Sierra
 * @module helpers
 */
import helpers from './src/index.js'

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default helpers
export const jsonPrettier = helpers.jsonPrettier
export const utf8Tob64 = helpers.utf8Tob64
export const b64Toutf8 = helpers.b64Toutf8
export const normalize = helpers.normalize
export const createApi = helpers.createApi
export const stripHtmlTags = helpers.stripHtmlTags
export const debounce = helpers.debounce
