const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('#closeBtn')
const modalOverlay = document.querySelector('#modalOverlay')
openBtn.onclick = () => {
  modalOverlay.classList.add('active')
  // document.body.classList.add('overflowHidden')
  document.body.style.overflow = 'hidden'
}
closeBtn.onclick = () => {
  modalOverlay.classList.remove('active')
  // document.body.classList.remove('overflowHidden')
  document.body.style.overflow = 'auto'
}
modalOverlay.onclick = (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove('active')
    // document.body.classList.remove('overflowHidden')
    document.body.style.overflow = 'auto'
  }
}
