const openBtn = document.querySelector('button')
const closeBtn = document.getElementById('close')
const modal = document.querySelector('.modal')

openBtn.addEventListener('click', () => {
    modal.style.display = 'grid'
})

const closeModal = () => {
    modal.style.display = 'none'
}
closeBtn.addEventListener('click', closeModal)
modal.addEventListener('click', e => {
    if (e.target.classList.contains('modal')) {
        closeModal()
    }
})


