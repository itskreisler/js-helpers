/**
 * @typedef {Object} Fns
 * @property {Function} onCall Function to call when debounce function is called
 * @property {Function} onComplete Function to call when debounce function is completed
 * @property {number} flood Number of calls to make before calling onFlood function
 * @property {Function} onFlood Function to call when flood limit is reached
 */

/**
 * Function to create a debounce function
 * @param {function} func Function to debounce
 * @param {number} msWait Number of milliseconds to wait before calling function
 * @param {Fns} fns Object with functions to call
 * @returns {function} Debounce function
 */
function debounce (
  func,
  msWait = 1000,
  fns = {
    onCall: function () {},
    onComplete: function () {},
    onFlood: function () {},
    immediate: false
  }
) {
  let timeout
  let callCount = 0
  const { onCall, onComplete, flood, onFlood, immediate } = fns

  return function (...args) {
    const context = this
    clearTimeout(timeout)

    if (immediate && callCount === 0) {
      func.apply(context, args)
      callCount++
    } else {
      if (onCall && typeof onCall === 'function') {
        onCall.apply(context, args)
      }

      callCount++

      if (callCount % flood === 0 && onFlood && typeof onFlood === 'function') {
        onFlood.apply(context, args)
      }

      timeout = setTimeout(() => {
        func.apply(context, args)
        callCount = 0 // callCount % flood

        if (onComplete && typeof onComplete === 'function') {
          onComplete.apply(context, args)
        }
      }, msWait)
    }
  }
}
export default debounce
const _debounce = debounce
export { _debounce as debounce }
