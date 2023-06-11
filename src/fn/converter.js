// Kelvin to Fahrenheit
export function kToF (k, precision = 0) {
  return round(((k - 273.15) * 9) / 5 + 32, precision)
}

// Kelvin to Celsius
export function kToC (k, precision = 0) {
  return round(k - 273.15, precision)
}

// m/s to mph
export function msToMph (speed, precision = 0) {
  // speed * seconds per hour / meters per mile
  return round((speed * 3600) / 1609.34, precision)
}

// m/s to kmh
export function msToKmh (speed, precision = 0) {
  // speed * seconds per hour / meters per km
  return round((speed * 3600) / 1000, precision)
}

// https://stackoverflow.com/a/47151941/2649697
function round (value, precision) {
  if (Number.isInteger(precision)) {
    const shift = 10 ** precision
    return Math.round(value * shift) / shift
  } else {
    return Math.round(value)
  }
}
