export function seperator(arr) {
  let num = []
  let sign = []
  arr.forEach((a) => {
    let value = parseInt(a)
    if (isNaN(value)) {
      sign.push(a)
    } else {
      num.push(value)
    }
  })
  return [num, sign]
}
