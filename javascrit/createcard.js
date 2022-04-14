export function createcard() {
    const profilecard = document.createElement('div')
    profilecard.className = 'profile-card'

    const profilecardtop = document.createElement('div')
    profilecardtop.className = 'profile-card-top'
    profilecard.appendChild(profilecardtop)

    const im1 = document.createElement('img')
    im1.src = './assets/image-equilibrium.jpg'
    im1.alt = "profile image"
    profilecardtop.appendChild(im1)

    const v1 = document.querySelector('#app')
    v1.appendChild(profilecard)

    const profilecardtopeye = document.createElement('div')
    profilecardtopeye.className = 'profile-card-top-eye'
    profilecardtop.appendChild(profilecardtopeye)


    const im2 = document.createElement('img')
    im2.src = "./assets/icon-view.svg"
    im2.alt = "priview image"
    profilecardtopeye.appendChild(im2)

    const profilecardbottom = document.createElement('div')
    profilecardbottom.className = "profile-card-bottom"
    profilecard.appendChild(profilecardbottom)

    const profilecardbottomequi = document.createElement('div')
    profilecardbottomequi.className = "profile-card-bottom_equi"
    profilecardbottom.appendChild(profilecardbottomequi)

    const diveq = document.createElement('div')
    profilecardbottomequi.appendChild(diveq)

    const spaneq = document.createElement('span')
    spaneq.textContent = 'Equilibrium #3429'
    diveq.appendChild(spaneq)

    const peq = document.createElement('p')
    peq.textContent = 'Our Equilibrium collection promotes balance and calm.'
    profilecardbottomequi.appendChild(peq)

    const profilecardbottom_dias = document.createElement('div')
    profilecardbottom_dias.className = "profile-card-bottom_dias"
    profilecardbottom.appendChild(profilecardbottom_dias)

    const color_letra = document.createElement('div')
    color_letra.className = "color_letra"
    profilecardbottom_dias.appendChild(color_letra)

    const im3 = document.createElement('img')
    im3.src = "./assets/icon-ethereum.svg"
    im3.alt = "profile image"
    color_letra.appendChild(im3)

    const spanc = document.createElement('span')
    spanc.textContent = '0.041 ETH'
    color_letra.appendChild(spanc)

    const color_letra2 = document.createElement('div')
    color_letra2.className = 'color_letra2'
    profilecardbottom_dias.appendChild(color_letra2)

    const im4 = document.createElement('img')
    im4.src = "./assets/icon-clock.svg"
    im4.alt = "profile image"
    color_letra2.appendChild(im4)

    const spanc2 = document.createElement('span')
    spanc2.textContent = '3 days left'
    color_letra2.appendChild(spanc2)

    const profilecardbottom_creation = document.createElement('div')
    profilecardbottom_creation.className = 'profile-card-bottom_creation'
    profilecardbottom.appendChild(profilecardbottom_creation)

    const im5 = document.createElement('img')
    im5.src = "./assets/image-avatar.png"
    im5.alt = "profile image"
    profilecardbottom_creation.appendChild(im5)

    const spancr = document.createElement('span')
    spancr.textContent = 'Creation of'
    profilecardbottom_creation.appendChild(spancr)

    const spancr2 = document.createElement('span')
    spancr2.textContent = 'Jules Wyvern'
    profilecardbottom_creation.appendChild(spancr2)
}