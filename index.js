import { createcard } from "./javascrit/createcard.js"
import { Button } from "./javascrit/button.js"
import { buttonDisabled } from "./javascrit/disablebutton.js"

const minCards = 1

const state = {

    quantity: minCards,

}

Button('Add Card', 'addbutton')
Button('Remove Card', 'removebutton')

/*realizar una accion  es decir un click */
addbutton.addEventListener('click', () => {

    createcard()
    state.quantity++
        buttonDisabled(state.quantity)

})

const removebutton = document.querySelector("#removebutton")

removebutton.addEventListener('click', () => {

    const parent = document.querySelector('#app')

    parent.removeChild(parent.lastElementChild)

    state.quantity--
        buttonDisabled(state.quantity)

})