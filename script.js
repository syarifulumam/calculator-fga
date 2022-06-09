const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const calculatorScreen =  document.querySelector(".calculator-screen")
const equalSign =  document.querySelector(".equal-sign")
const clearBtn =  document.querySelector(".all-clear")
const decimal =  document.querySelector(".decimal")
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'
const updateScreen = (number) => {
    calculatorScreen.value = number
}
const inputNumber = (number) => {
    currentNumber === '0' ? currentNumber = number : currentNumber += number 
}

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}

const calculate = () => {
    let result = ''
    switch(calculationOperator){
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            break

        }
        currentNumber = result
        calculationOperator = ''
}

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = ''
}

numbers.forEach(number => {
    number.addEventListener("click", (e) =>{
        inputNumber(e.target.value);
        if (calculationOperator === '') {
            updateScreen(currentNumber);
        } else {
            updateScreen(prevNumber + calculationOperator + currentNumber);
        }
    })
})

operators.forEach(operator => {
    operator.addEventListener("click", (e) => {
        updateScreen(currentNumber + e.target.value)
        inputOperator(e.target.value)
    })
})

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

decimal.addEventListener('click', (e) => {
    inputDecimal(e.target.value)
    if (calculationOperator === '') {
        updateScreen(currentNumber);
    } else {
        updateScreen(prevNumber + calculationOperator + currentNumber);
    }
})

const inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}
