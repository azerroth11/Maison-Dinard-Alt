const usBtn = document.querySelector('#usBtn')
const hero = document.querySelector('#hero')
const us = document.querySelector('#us')

usBtn.addEventListener('click', () => {
    setTimeout(function () {
        hero.classList.add('invisible')
    }, 500)
    setTimeout(function () {
        hero.classList.add('displayNone')
        us.classList.remove('displayNone')
    }, 1000)
    setTimeout(function () {
        us.classList.remove('invisible')
    }, 1010)
})

const selectionBtn = document.querySelector('#selectionBtn')
selectionBtn.addEventListener('click', () => {
    const intro = document.querySelector('.intro')
    intro.classList.add('invisible')
    const bottleWhite = document.querySelector('.bottlewhite')
    bottleWhite.classList.add('bottleWhiteCentered')
    const bottleRed = document.querySelector('.bottlered')
    bottleRed.classList.add('bottleRedCentered')
    const bottleRosé = document.querySelector('.bottlerosé')
    bottleRosé.classList.add('bottleRoséCentered')
    const bottleChampagne = document.querySelector('.bottlechampagne')
    bottleChampagne.classList.add('bottleChampagneCentered')
    setTimeout(() => {
        intro.classList.add('displayNone')
        bottleWhite.classList.remove('bottlewhite')
        bottleRed.classList.remove('bottlered')
        bottleRosé.classList.remove('bottlerosé')
        bottleChampagne.classList.remove('bottlechampagne')

        const relative = document.querySelector('.relative')
        const relativeh1 = relative.appendChild(document.createElement('h1'))
        relativeh1.innerText = 'Choisissez votre boisson'
    }, 500)
})
