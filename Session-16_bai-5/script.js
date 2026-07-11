function isPalindrome(str) {
  let cleanStr = str.toLowerCase()

  let reversedStr = cleanStr.split('').reverse().join('')

  return cleanStr === reversedStr
}

let inputString = prompt('Nhập vào chuỗi ký tự bạn muốn kiểm tra:')

if (inputString !== null) {
  if (isPalindrome(inputString)) {
    alert("Chuỗi'" + inputString + "' là chuỗi đối xứng.")
  } else {
    alert('Chuỗi' + inputString + "' không phải là chuỗi đối xứng.")
  }
}
