import { checkBrackets, findBracketIndex, findOperator } from "./check.js"
import { seperator } from "./seperator.js"

export function doBrackets(arr) {
  while (checkBrackets(arr)) {
    let [openingBracket, closingBracket] = findBracketIndex(arr)
    let bracketArray = arr.slice(openingBracket + 1, closingBracket)
    let [value, operator] = seperator(bracketArray, 0, bracketArray.length)
    let result = BODMAS(value, operator)
    let deleteItems = closingBracket - openingBracket + 1
    arr.splice(openingBracket, deleteItems, result)
  }
  return arr
}

export function BODMAS(num, sign) {
  while (num.length != 1 && sign.length > 0) {
    whileLoop(num, sign, "^")
    whileLoop(num, sign, "/")
    whileLoop(num, sign, "*")
    whileLoop(num, sign, "+")
    whileLoop(num, sign, "-")
  }
  return num
}
function whileLoop(num, sign, arg) {
  while (findOperator(sign, arg)) {
    operate(num, sign, arg)
  }
}
function operate(num, sign, operation) {
  let index = find(sign, operation)
  let result = undefined
  if (operation === "^") {
    result = num[index] ** num[index + 1]
  } else if (operation === "/") {
    result = num[index] / num[index + 1]
  } else if (operation === "*") {
    result = num[index] * num[index + 1]
  } else if (operation === "+") {
    if (sign[index - 1] === "-") {
      result = num[index + 1] - num[index]
    } else {
      result = num[index] + num[index + 1]
    }
  } else if (operation === "-") {
    result = num[index] - num[index + 1]
  }
  num.splice(index, 2, result)
  sign.splice(index, 1)
}
function find(arr, element) {
  return arr.findIndex((a) => {
    return a === element
  })
}
