const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('#closeBtn')
const modalOverlay = document.querySelector('#modalOverlay')

openBtn.onclick = () => {
  modalOverlay.classList.add('active')
}
closeBtn.onclick = () => {
  modalOverlay.classList.remove('active')
}
modalOverlay.onclick = (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove('active')
  }
}
