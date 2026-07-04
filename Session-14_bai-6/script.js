let bookList = [{ id: '1', name: 'Dế Mèn Phiêu Lưu Ký', author: 'Tô Hoài', year: 1941 }]

// Hàm hiển thị Menu
function showMenu() {
  console.log('\n--- QUẢN LÝ SÁCH ---')
  console.log('1. Thêm sách mới')
  console.log('2. Hiển thị danh sách sách')
  console.log('3. Tìm kiếm sách theo tên')
  console.log('4. Xóa sách theo ID')
  console.log('5. Thoát chương trình')
}

// Chức năng 1: Thêm sách
function addBook() {
  let id = prompt('Nhập ID:')
  let name = prompt('Nhập tên sách:')
  let author = prompt('Nhập tác giả:')
  let year = prompt('Nhập năm xuất bản:')

  bookList.push({ id, name, author, year })
  console.log('=> Thêm sách thành công!')
}

// Chức năng 2: Hiển thị danh sách
function displayBooks() {
  console.log('\n--- DANH SÁCH SÁCH ---')
  if (bookList.length === 0) {
    console.log('Danh sách trống!')
  } else {
    bookList.forEach((book, index) => {
      console.log(`${index + 1}. [ID: ${book.id}] ${book.name} - ${book.author} (${book.year})`)
    })
  }
}

// Chức năng 3: Tìm kiếm theo tên
function searchBook() {
  let keyword = prompt('Nhập từ khóa tên sách cần tìm:').toLowerCase()
  let results = bookList.filter((book) => book.name.toLowerCase().includes(keyword))

  if (results.length > 0) {
    console.log('=> Kết quả tìm thấy:')
    results.forEach((book) => console.log(`- [ID: ${book.id}] ${book.name}`))
  } else {
    console.log('=> Không tìm thấy sách nào khớp với từ khóa.')
  }
}

// Chức năng 4: Xóa sách theo ID
function deleteBook() {
  let id = prompt('Nhập ID sách muốn xóa:')
  let index = bookList.findIndex((book) => book.id === id)

  if (index !== -1) {
    bookList.splice(index, 1)
    console.log('=> Xóa sách thành công!')
  } else {
    console.log('=> Lỗi: ID không tồn tại.')
  }
}

let isRunning = true
while (isRunning) {
  showMenu()
  let choice = prompt('Nhập lựa chọn của bạn:')

  switch (choice) {
    case '1':
      addBook()
      break
    case '2':
      displayBooks()
      break
    case '3':
      searchBook()
      break
    case '4':
      deleteBook()
      break
    case '5':
      console.log('Chương trình kết thúc. Tạm biệt!')
      isRunning = false
      break
    default:
      console.log('=> Lựa chọn không hợp lệ, vui lòng nhập lại!')
  }
}
