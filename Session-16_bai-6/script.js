function tinhTong(arr) {
  return arr.reduce((acc, currentValue) => acc + currentValue, 0)
}

let danhSachSo = [1, 2, 3, 4, 5, 6]
let ketQua = tinhTong(danhSachSo)
console.log('Tổng là: ' + ketQua)
