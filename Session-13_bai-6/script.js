let numbers = []
for (let i = 0; i < 20; i++) {
  let randomNum = Math.floor(Math.random() * 11) + 10
  numbers.push(randomNum)
}

console.log('Mảng số nguyên hiện tại:', numbers)

let k
do {
  let input = prompt('Mảng chứa các số từ 10 đến 20. Hãy nhập vào một số nguyên k để kiểm tra:')
  k = parseInt(input)

  if (isNaN(k)) {
    alert('Vui lòng chỉ nhập số nguyên!')
  }
} while (isNaN(k))

let count = 0

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === k) {
    count++
  }
}

if (count > 0) {
  alert('Số ' + k + ' xuất hiện ' + count + ' lần trong mảng.')
} else {
  alert('Số ' + k + ' không xuất hiện trong mảng.')
}
