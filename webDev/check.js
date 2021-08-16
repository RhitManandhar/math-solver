export function findOperator(arg, operator) {
  return arg.includes(operator)
}
export function findBracketIndex(arg) {
  let closingBracket = arg.findIndex((a) => {
    return a === ")"
  })
  let openingBracket = null
  for (let i = closingBracket; i >= 0; i--) {
    if (arg[i] === "(") {
      openingBracket = i
      break
    }
  }
  return [openingBracket, closingBracket]
}
export function checkBrackets(arg) {
  if (!arg.includes(")") && !arg.includes("(")) return false
  let openingCount = arg.filter((a) => a === "(").length
  let closingCount = arg.filter((a) => a === ")").length
  if (openingCount != closingCount) return "err"
  let [openingBracket, closingBracket] = findBracketIndex(arg)
  if (openingBracket === null) return "err"
  return true
}
