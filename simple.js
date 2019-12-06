const init = () => {
    const
        input1 = document.querySelector('.input1'),
        input2 = document.querySelector('.input2'),
        add = document.querySelector('.btn--add'),
        subtract = document.querySelector('.btn--subtract'),
        multiply = document.querySelector('.btn--multiply'),
        divide = document.querySelector('.btn--divide'),
        clear = document.querySelector('.btn--clear')
        result = document.querySelector('.sum')

    input1.focus()

    const calculateAdd = (num1, num2) => {
        num1 = parseInt(input1.value)
        num2 = parseInt(input2.value)

        sum = num1 + num2

        result.innerHTML = sum
    }

    const calculateSubtract = (num1, num2) => {
        num1 = parseInt(input1.value)
        num2 = parseInt(input2.value)

        sum = num1 - num2

        result.innerHTML = sum
    }

    const calculateMultiply = (num1, num2) => {
        num1 = parseInt(input1.value)
        num2 = parseInt(input2.value)

        sum = num1 * num2

        result.innerHTML = sum
    }

    const calculateDivide = (num1, num2) => {
        num1 = parseInt(input1.value)
        num2 = parseInt(input2.value)

        sum = num1 / num2

        result.innerHTML = sum
    }

    const clearNum = () => {
        input1.value = ''
        input2.value = ''

        result.innerHTML = 0

        input1.focus()
    }

    // Eventlisteners
    add.addEventListener('click', calculateAdd)
    subtract.addEventListener('click', calculateSubtract)
    multiply.addEventListener('click', calculateMultiply)
    divide.addEventListener('click', calculateDivide)
    clear.addEventListener('click', clearNum)
}

init()