const openBtn = document.getElementById('nav-open')
const closeBtn = document.getElementById('nav-close')
const container = document.querySelector('.container')

openBtn.addEventListener('click', addShow)
closeBtn.addEventListener('click', removeShow)

function addShow() {
    container.classList.add('show')
}
function removeShow() {
    container.classList.remove('show')
}