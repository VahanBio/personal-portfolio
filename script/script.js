function animations() {
    const sr = ScrollReveal({
        distance: '60px',
        duration: 2500,
        reset: true,
    })

    sr.reveal('#bitBucket, .gaming, .switch, #css, .text-left, .picture1, .picture3, .knowledge', {
        origin: 'right',
        interval: 100,
    })
    sr.reveal('.name, #gitHub, .editing , #html, .courses, .picture2, .templateText ', {
        origin: 'left',
        interval: 100,
    })
    sr.reveal(' .coding, #javascript, .about-Text, .blooms-tea, .industrious ', {
        origin: 'top',
        interval: 100,
    })
    sr.reveal('#vue, .submainText, .hobby, .sunnySide', {
        original: 'bottom',
        interval: 100,
    })
}

function darkModeToggler() {
    let switchToggle = document.querySelector('.switch');
    switchToggle.addEventListener('click', () => {
        document.body.classList.toggle('darkMode')
    })
}

function locations() {
    const sunnySide = document.querySelector('.sunny-side-pic');
    const bloomsTea = document.querySelector('.blooms-tea');
    const industrious = document.querySelector('.industrious');

    sunnySide.addEventListener('click', () => {
        window.open('https://github.com/VahanBio/responsive-sunnyside-purejs-css-html')
    });
    bloomsTea.addEventListener('click', () => {
        window.open('https://github.com/VahanBio/Blooms-Tea')
    });
    industrious.addEventListener('click', () => {
        window.open('https://github.com/VahanBio/Industrious-Template')
    })
}

animations()
darkModeToggler()
locations()