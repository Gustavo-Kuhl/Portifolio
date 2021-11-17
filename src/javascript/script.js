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

function app() {

    ScrollReveal().reveal('#about', {
        delay: 400,
        duration: 400,
        distance: '10%',
        origin: "top",
        reset: true
    })
    
    ScrollReveal().reveal('#skills', {
        delay: 500,
        distance: '10%',
        duration: 400,
        origin: "top",
        reset: true
    })
    
    ScrollReveal().reveal('#projects', {
        delay: 500,
        distance: '20%',
        duration: 600,
        origin: "left",
        reset: true
    })

}

app()