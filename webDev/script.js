import { doBrackets, BODMAS } from "./math.js"
import { seperator } from "./seperator.js"
import { checkBrackets } from "./check.js"

const OPERATORS = ["^", "/", "*", "+", "-"]
const BRACKETS = ["(", ")"]

const form = document.querySelector(".form")
const input = document.querySelector(".input")
const span = document.querySelector(".span")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  let arr = input.value.split(" ")
  if (checkForError(arr)) return (span.innerText = "Error.")
  if (checkBrackets(arr) === "err") return (span.innerText = "Brackets Error.")

  doBrackets(arr)
  if (arr.length === 1) return (span.innerText = arr[0])

  const [value, operator] = seperator(arr, 0, arr.length)
  span.innerText = BODMAS(value, operator)
})

function checkForError(arr) {
  const signs = OPERATORS.concat(BRACKETS)
  let boolean = false
  arr.every((a) => {
    let value = parseInt(a)
    if (isNaN(value)) {
      if (!signs.includes(a)) {
        boolean = true
      }
    }
  })
  return boolean
}
