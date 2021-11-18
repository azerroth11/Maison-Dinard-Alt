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
    }, 500)
    const white = document.querySelector('.bottleWhiteCentered')
    const red = document.querySelector('.bottleRedCentered')
    const rosé = document.querySelector('.bottleRoséCentered')
    const champagne = document.querySelector('.bottleChampagneCentered')
    const bottlesArray = [white, red, rosé, champagne]
    bottlesArray.forEach(bottle =>
        bottle.addEventListener('click', e => {
            clearDomainDiv()
            const brokenBottles = bottlesArray.filter(item => item != e.target)
            brokenBottles.forEach(brokenBottle => {
                brokenBottle.classList.toggle('brokenBottle')
            })
            e.target.classList.toggle('chosenBottle')
            displayData(e)
        })
    )
})

function displayData(e) {
    if (e.target.className == 'bottleRedCentered chosenBottle') {
        const bottleColor = 'Rouge'
        createList(bottleColor)
    } else if (e.target.className == 'bottleWhiteCentered chosenBottle') {
        const bottleColor = 'Blanc'
        createList(bottleColor)
    } else if (e.target.className == 'bottleRoséCentered chosenBottle') {
        const bottleColor = 'Rosé'
        createList(bottleColor)
    } else if (e.target.className == 'bottleChampagneCentered chosenBottle') {
        const bottleColor = 'Champagne'
        createList(bottleColor)
    }
}

function createList(bottleColor) {
    data.forEach(e => {
        if (e.color.includes(bottleColor)) {
            const domain = document.querySelector(`.${e.location}`)
            domain.classList.remove('invisible')
            const domainName = domain.appendChild(document.createElement('li'))
            domainName.innerText = e.id
        }
    })
}

function clearDomainDiv() {
    const domainsDiv = document.querySelector('.domainsDiv')
    const toBeDeleted = domainsDiv.querySelectorAll('li')
    toBeDeleted.forEach(e => {
        e.remove()
    })
    Array.from(domainsDiv.children).forEach(e => {
        e.classList.add('invisible')
    })
}

// Data
const data = [
    {
        location: 'BEAUJOLAIS',
        id: 'Domaine Dubost',
        color: ['Rouge'],
    },
    {
        location: 'BEAUJOLAIS',
        id: 'Château de Pizay',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'BORDEAUX',
        id: 'H. Cuvelier & Fils',
        color: ['Rouge'],
    },
    {
        location: 'BORDEAUX',
        id: 'Domaines Select',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    { location: 'BORDEAUX', id: 'Gironde et Gascogne', color: ['Rouge'] },
    {
        location: 'BORDEAUX',
        id: 'Château Tourteau Chollet',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'BORDEAUX',
        id: 'Famille André Lurton',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'BOURGOGNE',
        id: 'Domaines Devillard',
        color: ['Rouge', 'Blanc'],
    },
    {
        location: 'BOURGOGNE',
        id: 'Domaine Nathalie & Gilles Fèvre',
        color: ['Blanc'],
    },
    {
        location: 'BOURGOGNE',
        id: 'Maison René Lamy',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    { location: 'CHAMPAGNE', id: 'Billecart-Salmon', color: ['Champagne'] },
    { location: 'CHAMPAGNE', id: 'Champagne Drappier', color: ['Champagne'] },
    {
        location: 'CORSE',
        id: 'Domaine Vico',
        color: ['Rouge', 'Blanc'],
    },
    {
        location: 'LANGUEDOC',
        id: 'Domaine de la Cendrillon',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'LANGUEDOC',
        id: 'Domaine Grand Chemin',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'LANGUEDOC',
        id: 'Domaine la Croix Chaptal',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    { location: 'LANGUEDOC', id: 'Domaines Bru', color: ['Rouge'] },
    {
        location: 'LANGUEDOC',
        id: 'Château de Fontenille',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'LANGUEDOC',
        id: 'Anne de Joyeuse',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'LOIRE',
        id: 'Levron & Vincenot',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'LOIRE',
        id: 'Domaine Filliatreau',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'LOIRE',
        id: 'Domaine Laporte',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    { location: 'LOIRE', id: 'Domaine Pierre Luneau-Papin', color: ['Blanc'] },
    {
        location: 'LOIRE',
        id: 'Lorieux Alain & Pascal',
        color: ['Rosé', 'Rouge'],
    },
    {
        location: 'LOIRE',
        id: 'Domaine Maison Père & Fils',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'LOIRE',
        id: 'Saget La Perrière',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'LOIRE',
        id: 'Domaines Tatin',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'PROVENCE',
        id: 'Château Pas du Cerf',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'PROVENCE',
        id: 'Domaine de la Bégude',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'PROVENCE',
        id: 'Domaine la Rouillère ',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'RHONE',
        id: 'Yanne Chave',
        color: ['Rouge', 'Blanc'],
    },
    { location: 'RHONE', id: 'Ames Complices', color: ['Rouge'] },
    {
        location: 'RHONE',
        id: 'Domaine de Beaurenard',
        color: ['Rouge', 'Blanc'],
    },
    {
        location: 'RHONE',
        id: 'Domaine de la Mordorée',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'RHONE',
        id: 'Domaine de Montvac',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'RHONE',
        id: 'Domaine Saint Amant',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'RHONE',
        id: 'Château de Nages',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'RHONE',
        id: 'Domaine Lionel Faury',
        color: ['Rouge', 'Blanc'],
    },
    { location: 'SPIRITUEUX', id: 'Dirum Dzama', color: ['Spiritueux'] },
    {
        location: 'SPIRITUEUX',
        id: 'Les Whiksies du Monde',
        color: ['Spiritueux'],
    },
    { location: 'SPIRITUEUX', id: 'Pardela Spirits', color: ['Spiritueux'] },
    { location: 'SPIRITUEUX', id: 'Moon Harbour', color: ['Spiritueux'] },
    { location: 'SPIRITUEUX', id: 'Raymond Ragnaud', color: ['Spiritueux'] },
    {
        location: 'SUD-OUEST',
        id: 'Bisto de Nas',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'SUD-OUEST',
        id: 'Domaines Brumont',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'SUD-OUEST',
        id: 'Domaine Tariquet',
        color: ['Rosé', 'Blanc', 'Spiritueux'],
    },
]
