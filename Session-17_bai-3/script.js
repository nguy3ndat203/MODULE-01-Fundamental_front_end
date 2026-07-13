let btnOpen = document.querySelector('.btn-open')
let btnClose = document.querySelector('.btn-close')
let overlay = document.querySelector('.overlay')
btnOpen.addEventListener('click', () => {
  overlay.style.display = 'block'
})

btnClose.addEventListener('click', () => {
  overlay.style.display = 'none'
})
