let canNang = parseFloat(prompt('Nhập cân nặng của bạn (kg):'))
let chieuCao = parseFloat(prompt('Nhập chiều cao của bạn (mét - ví dụ: 1.65):'))

if (canNang == null || chieuCao == null || canNang <= 0 || chieuCao <= 0) {
  alert('Vui lòng nhập chiều cao và cân nặng hợp lệ!')
} else {
  let bmi = canNang / (chieuCao * chieuCao)

  let phanLoai = ''

  // Phân loại
  if (bmi < 18.5) {
    phanLoai = 'Cân nặng thấp (gầy)'
  } else if (bmi >= 18.5 && bmi <= 22.9) {
    phanLoai = 'Bình thường'
  } else if (bmi >= 23 && bmi <= 24.9) {
    phanLoai = 'Tiền béo phì'
  } else if (bmi >= 25 && bmi <= 29.9) {
    phanLoai = 'Béo phì độ I'
  } else {
    phanLoai = 'Béo phì độ II'
  }

  alert('Chỉ số BMI của bạn là: ' + Math.round(bmi * 10) / 10 + '\nPhân loại: ' + phanLoai)
}
