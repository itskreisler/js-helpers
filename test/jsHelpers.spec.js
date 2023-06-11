/**
 * @author Kreisler Ramirez Sierra
 * @file This file contains the test for the `jsHelpers` function.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT NATIVE NODE MODULES
import { describe, it } from 'node:test'
import { strictEqual, equal } from 'node:assert'

// » IMPORT MODULES
import { jsonPrettier, b64Toutf8, utf8Tob64, normalize } from '../index.js'

// ━━ TEST ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
describe('jsHelpers', async () => {
  it('should return a string', async () => {
    const actual = {
      hello: 'Hello'
    }
    const result = jsonPrettier(actual)
    strictEqual(typeof result, 'string')
  })
  it('should return a string with the same value as the argument', async () => {
    const actual = {
      hello: 'Hello'
    }
    const result = jsonPrettier(actual)
    equal(result, JSON.stringify(actual, null, 2))
  })
  it('should return a string b64', async () => {
    const b64 = 'aG9sYQ==' // 'hola'
    const result = b64Toutf8(b64)
    equal(result, 'hola')
  })
  it('should return a string utf8', async () => {
    const utf8 = 'hola'
    const result = utf8Tob64(utf8)
    equal(result, 'aG9sYQ==') // 'hola'
  })
  it('it should return a string normalized', async () => {
    const str = 'hola-mundó´´sss¨dödasdasdjol ´ 1'
    const result = normalize(str)
    equal(result, 'hola-mundosssdodasdasdjol  1')
  })
})
