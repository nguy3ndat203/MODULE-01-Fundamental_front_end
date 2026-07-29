// 1. Lấy dữ liệu từ Local Storage
let userList = JSON.parse(localStorage.getItem('userList')) || []
const editModal = document.getElementById('editModal')

// 2. Hàm Render Bảng Dữ Liệu
function renderTable() {
  const tbody = document.getElementById('userTableBody')
  tbody.innerHTML = ''

  if (userList.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" class="empty-row">Chưa có người dùng nào.</td></tr>`
    return
  }

  userList.forEach((user, index) => {
    const tr = document.createElement('tr')
    tr.innerHTML = `
                <td>${index + 1}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td class="text-center">
                    <button class="btn btn-warning" style="padding: 5px 10px; font-size: 12px;" onclick="openEditModal(${index})">Sửa</button>
                    <button class="btn btn-danger" style="padding: 5px 10px; font-size: 12px;" onclick="deleteUser(${index})">Xóa</button>
                </td>
            `
    tbody.appendChild(tr)
  })
}

// 3. Xử lý Thêm Mới User
document.getElementById('addUserForm').addEventListener('submit', function (e) {
  e.preventDefault()

  const nameInput = document.getElementById('addName')
  const emailInput = document.getElementById('addEmail')

  userList.push({
    name: nameInput.value.trim(),
    email: emailInput.value.trim()
  })

  localStorage.setItem('userList', JSON.stringify(userList))
  renderTable()

  // Xóa sạch ô nhập sau khi thêm thành công
  nameInput.value = ''
  emailInput.value = ''
})

// 4. Mở Modal & Đổ dữ liệu cũ vào Form
function openEditModal(index) {
  const user = userList[index]

  document.getElementById('editIndex').value = index
  document.getElementById('editName').value = user.name
  document.getElementById('editEmail').value = user.email

  editModal.classList.add('active')
}

// 5. Đóng Modal
function closeModal() {
  editModal.classList.remove('active')
}

// Tự đóng Modal khi người dùng click ra vùng nền đen bên ngoài
window.addEventListener('click', function (e) {
  if (e.target === editModal) {
    closeModal()
  }
})

// 6. Lưu Dữ Liệu Sau Khi Chỉnh Sửa
function saveUpdate() {
  const index = document.getElementById('editIndex').value
  const newName = document.getElementById('editName').value.trim()
  const newEmail = document.getElementById('editEmail').value.trim()

  if (newName === '' || newEmail === '') {
    alert('Vui lòng không để trống thông tin!')
    return
  }

  // Cập nhật lại mảng và LocalStorage
  userList[index].name = newName
  userList[index].email = newEmail
  localStorage.setItem('userList', JSON.stringify(userList))

  closeModal()
  renderTable()
}

// 7. Xóa User
function deleteUser(index) {
  if (confirm('Bạn có chắc chắn muốn xóa người dùng này không?')) {
    userList.splice(index, 1)
    localStorage.setItem('userList', JSON.stringify(userList))
    renderTable()
  }
}

// Chạy hàm render khi mở trang
renderTable()
