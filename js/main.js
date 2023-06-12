let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
let score = 0
let score2 = 0

let playEl = document.getElementById("play-el")
let playEl2 = document.getElementById("play2-el")
let scoreEl = document.getElementById("score-el")
let scoreEl2 = document.getElementById("score-el2")


function battleStart() {
  let randNum = Math.floor(Math.random() * numbers.length) + 1
  let randNum2 = Math.floor(Math.random() * numbers.length) + 1
  points = [ randNum, randNum2 ]
  let sum = randNum + randNum2
  playEl.textContent = randNum
  playEl2.textContent = randNum2
  
  
  if (randNum > randNum2) {
    score += sum
    scoreEl.textContent = score
  } else if (randNum2 > randNum) {
     score2 += sum
     scoreEl2.textContent = score2
  }
}

function reset() {
  playEl.textContent = 0
  scoreEl.textContent = 0
  playEl2.textContent = 0
  scoreEl2.textContent = 0
  score = 0
  score2 = 0
}