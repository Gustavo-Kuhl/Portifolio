function app() {

    ScrollReveal().reveal('#gustavo-kuhl', {
        delay: 400,
        origin: 'right',
        reset: false,
        distance: '20%'
    })

    ScrollReveal().reveal('#about', {
        delay: 400,
        duration: 400,
        distance: '10%',
        origin: "top",
        reset: false
    })
    
    ScrollReveal().reveal('#skills', {
        delay: 500,
        distance: '10%',
        duration: 400,
        origin: "top",
        reset:false
    })
    
    ScrollReveal().reveal('#projects', {
        delay: 500,
        distance: '20%',
        duration: 600,
        origin: "left",
        reset: false
    })

}

app()