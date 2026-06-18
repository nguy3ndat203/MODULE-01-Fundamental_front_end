let dolar = Number(prompt('Nhập vào tiền cần chuyển: '))
const exchangeRate = 25000

let vnd = dolar * exchangeRate
alert(`Số tiền sau khi chuyển đổi từ ${dolar} USD sang VND là: ${vnd} VND`)
