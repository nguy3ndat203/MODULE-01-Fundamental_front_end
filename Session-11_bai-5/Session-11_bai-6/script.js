let a = parseFloat(prompt('Mời bạn nhập vào số a'))
let b = parseFloat(prompt('Mời bạn nhập vào số b'))

let phepTinh = prompt('Mời bạn nhập vào các phép tính (+, -, *, /)')

let ketQua
let hopLe = true

switch (phepTinh) {
  case '+':
    ketQua = a + b
    break
  case '-':
    ketQua = a - b
    break
  case '*':
    ketQua = a * b
    break
  case '/':
    if (b === 0) {
      alert('Không thể chia cho số 0!')
      hopLe = false
    } else {
      ketQua = a / b
    }
    break
  default:
    alert('Phép tính không hợp lệ! Vui lòng chỉ nhập +, -, * hoặc /')
    hopLe = false
}

if (hopLe && !isNaN(a) && !isNaN(b)) {
  alert('Kết quả của phép tính trên: ' + a + ' ' + phepTinh + ' ' + b + ' = ' + ketQua)
} else if (isNaN(a) || isNaN(b)) {
  alert('Vui lòng nhập vào số hợp lệ!')
}
