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
            brokenBottles.forEach(e => {
                e.classList.toggle('brokenBottle')
            })
            e.target.classList.toggle('chosenBottle')
            displayData(e)
        })
    )
})

function displayData(e) {
    if (e.target.className == 'bottleRedCentered chosenBottle') {
        const bottleColor = 'Rouge'
        test(bottleColor)
    } else if (e.target.className == 'bottleWhiteCentered chosenBottle') {
        const bottleColor = 'Blanc'
        test(bottleColor)
    } else if (e.target.className == 'bottleRoséCentered chosenBottle') {
        const bottleColor = 'Rosé'
        test(bottleColor)
    } else if (e.target.className == 'bottleChampagneCentered chosenBottle') {
        const bottleColor = 'Champagne'
        test(bottleColor)
    }
}

function test(bottleColor) {
    data.forEach(e => {
        if (e.color.includes(bottleColor)) {
            const domainsDiv = document.querySelector('.domainsDiv')
            const domain = domainsDiv.appendChild(document.createElement('li'))
            domain.innerText = e.id
        }
    })
}

function clearDomainDiv() {
    const domainsDiv = document.querySelector('.domainsDiv')
    domainsDiv.innerHTML = ''
}

// Data
const data = [
    {
        location: 'BEAUJOLAIS',
        id: 'DOMAINE DUBOST',
        color: ['Rouge'],
    },
    {
        location: 'BEAUJOLAIS',
        id: 'CHATEAU DE PIZAY',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'BORDEAUX',
        id: 'H. CUVELIER & FILS',
        color: ['Rouge'],
    },
    {
        location: 'BORDEAUX',
        id: 'DOMAINES SELECT',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    { location: 'BORDEAUX', id: 'GIRONDE ET GASCOGNE', color: ['Rouge'] },
    {
        location: 'BORDEAUX',
        id: 'CHATEAU TOURTEAU CHOLLET',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'BORDEAUX',
        id: 'FAMILLE ANDRE LURTON',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'BOURGOGNE',
        id: 'DOMAINES DEVILLARD',
        color: ['Rouge', 'Blanc'],
    },
    {
        location: 'BOURGOGNE',
        id: 'DOMAINE NATHALIE & GILLES FEVRE',
        color: ['Blanc'],
    },
    {
        location: 'BOURGOGNE',
        id: 'MAISON RENE LAMY',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    { location: 'CHAMPAGNE', id: 'BILLECART-SALMON', color: ['Champagne'] },
    { location: 'CHAMPAGNE', id: 'CHAMPAGNE DRAPPIER', color: ['Champagne'] },
    {
        location: 'CORSE',
        id: 'DOMAINE VICO ET VENTURI',
        color: ['Rouge', 'Blanc'],
    },
    {
        location: 'LANGUEDOC',
        id: 'DOMAINE DE LA CENDRILLON',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'LANGUEDOC',
        id: 'DOMAINE GRAND CHEMIN',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'LANGUEDOC',
        id: 'DOMAINE LA CROIX CHAPTAL',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    { location: 'LANGUEDOC', id: 'DOMAINES BRU', color: ['Rouge'] },
    {
        location: 'LANGUEDOC',
        id: 'CHATEAU DE FONTENILLE',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'LANGUEDOC',
        id: 'ANNE DE JOYEUSE',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'LOIRE',
        id: 'LEVRON & VINCENOT',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'LOIRE',
        id: 'DOMAINE FILLIATREAU',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'LOIRE',
        id: 'DOMAINE LAPORTE',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    { location: 'LOIRE', id: 'DOMAINE PIERRE LUNEAU-PAPIN', color: ['Blanc'] },
    {
        location: 'LOIRE',
        id: 'LORIEUX ALAIN & PASCAL',
        color: ['Rosé', 'Rouge'],
    },
    {
        location: 'LOIRE',
        id: 'DOMAINE MAISON PERE & FILS',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'LOIRE',
        id: 'SAGET LA PERRIERE',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'LOIRE',
        id: 'DOMAINES TATIN',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'PROVENCE',
        id: 'CHATEAU PAS DU CERF',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'PROVENCE',
        id: 'DOMAINE DE LA BEGUDE',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'PROVENCE',
        id: 'DOMAINE LA ROUILLERE',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'RHONE',
        id: 'YANN CHAVE',
        color: ['Rouge', 'Blanc'],
    },
    { location: 'RHONE', id: 'AMES COMPLICES', color: ['Rouge'] },
    {
        location: 'RHONE',
        id: 'DOMAINE DE BEAURENARD',
        color: ['Rouge', 'Blanc'],
    },
    {
        location: 'RHONE',
        id: 'DOMAINE DE LA MORDOREE',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'RHONE',
        id: 'DOMAINE DE MONTVAC',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'RHONE',
        id: 'DOMAINE SAINT AMANT',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'RHONE',
        id: 'CHATEAU DE NAGES',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'RHONE',
        id: 'DOAMINE LIONEL FAURY',
        color: ['Rouge', 'Blanc'],
    },
    { location: 'SPIRITUEUX', id: 'DIRUM DZAMA', color: ['Spiritueux'] },
    {
        location: 'SPIRITUEUX',
        id: 'LES WHISKIES DU MONDE',
        color: ['Spiritueux'],
    },
    { location: 'SPIRITUEUX', id: 'PARDELA SPIRITS', color: ['Spiritueux'] },
    { location: 'SPIRITUEUX', id: 'MOON HARBOUR', color: ['Spiritueux'] },
    { location: 'SPIRITUEUX', id: 'RAYMOND RAGNAUD', color: ['Spiritueux'] },
    {
        location: 'SUD OUEST',
        id: 'BISTO DE NAS',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'SUD OUEST',
        id: 'DOMAINES BRUMONT',
        color: ['Rosé', 'Rouge', 'Blanc'],
    },
    {
        location: 'SUD OUEST',
        id: 'DOMAINE TARIQUET',
        color: ['Rosé', 'Blanc', 'Spiritueux'],
    },
]
