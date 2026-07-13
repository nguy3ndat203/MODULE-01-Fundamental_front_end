const btn = document.querySelector('.btn')

btn.addEventListener('click', (e) => {
  e.preventDefault()
  const user = document.getElementById('username').value
  const pass = document.getElementById('password').value

  if (user === 'datng@gmail.com' && pass === '123456') {
    alert('Đăng nhập thành công!')
  } else {
    alert('Đăng nhập thất bại!')
  }
})
