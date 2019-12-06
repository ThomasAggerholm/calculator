// Vars
const
    display = document.querySelector('.display'),
    buttons = document.querySelectorAll('.a_btn'),
    equal = document.querySelector('.equal'),
    clear = document.querySelector('.a_clear'),
    addBtn = document.querySelector('.btn-add')

let
    n1,
    n2


buttons.forEach(button => {
    button.addEventListener('click', function() {

        if (this.getAttribute('data-type') == 'operator') { 
            this.classList.add('is-pressed')
            return
        }

        if (display.textContent == 0) {
            display.textContent = '' + this.textContent
        } else  {
            display.textContent = display.textContent + this.textContent
        }

    })
})

const adding = (n1, n2) => {
    n1 = parseInt(display.textContent)


}

const clearAll = () => {
    display.textContent = 0
}

clear.addEventListener('click', clearAll)
addBtn.addEventListener('click', adding)