const projectsModal = {
    showModal() {

        const images = document.querySelectorAll('#projects img')
        const modal = document.querySelector('#modal')
        const modalDisplay = document.querySelector('.modal-display')

        images.forEach(image => {
            image.addEventListener('click', () => {
                modal.classList.add('active')
                modalDisplay.appendChild('')
            })
        })

    },

    closeModal() {

        const close = document.querySelector('.modal-display span')
        const modal = document.querySelector('#modal')

        close.addEventListener('click', () => {
            modal.classList.remove('active')
        })

    }
}

projectsModal.showModal()
projectsModal.closeModal()

function app() {

    ScrollReveal().reveal('#about', {
        delay: 400,
        duration: 400,
        distance: '30%',
        origin: "top",
        reset: true
    })
    
    ScrollReveal().reveal('#skills', {
        delay: 500,
        distance: '30%',
        duration: 400,
        origin: "top",
        reset: true
    })
    
    ScrollReveal().reveal('#projects', {
        delay: 500,
        distance: '30%',
        duration: 600,
        origin: "top",
        reset: true
    })

}

app()