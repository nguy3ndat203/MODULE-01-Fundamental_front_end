let numbers = []

for (let i = 0; i < 20; i++) {
  let randomNum = Math.floor(Math.random() * 100)
  numbers.push(randomNum)
}

let sumEven = 0
let sumOdd = 0

let index = 0
while (index < numbers.length) {
  let currentNumber = numbers[index]

  if (currentNumber % 2 === 0) {
    sumEven += currentNumber
  } else {
    sumOdd += currentNumber
  }

  index++
}

alert('Tổng các số lẻ trong mảng là: ' + sumOdd)
alert('Tổng các số chẵn trong mảng là: ' + sumEven)
