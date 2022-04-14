export function buttonDisabled(quantity) {

    const btnAddCard = document.querySelector("#addbutton")

    const btnRemoveCard = document.querySelector("#removebutton")




    if (quantity == 10) {

        btnAddCard.setAttribute("disabled", "")

    } else {

        if (quantity == 1) {

            btnRemoveCard.setAttribute("disabled", "")

        } else {

            btnAddCard.removeAttribute("disabled")

            btnRemoveCard.removeAttribute("disabled", "true")

        }



    }

}