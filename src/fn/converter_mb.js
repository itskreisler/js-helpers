const converterMb = (size) => {
  return (size / 1024 / 1024).toFixed(2)
}

export default converterMb
const _converterMb = converterMb
export { _converterMb as converterMb }
