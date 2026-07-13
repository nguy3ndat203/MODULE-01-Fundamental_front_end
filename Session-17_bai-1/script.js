let text = document.querySelector('.text')
let btnHide = document.querySelector('.hide')
let btnShow = document.querySelector('.show')

btnHide.addEventListener('click', () => {
  text.style.display = 'none'
})
btnShow.addEventListener('click', () => {
  text.style.display = 'block'
})
