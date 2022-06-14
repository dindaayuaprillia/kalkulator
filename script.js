let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

//--01----------CALCULATOR SCREEN & UPDATE-------------------
const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
    calculatorScreen.value = number;
}


//--02----------OPERATORS EVENTS-------------------
const operators = document.querySelectorAll(".operator");

operators.forEach( (operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    });
    
});

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber;
    };
    
    calculationOperator = operator;
    currentNumber = '0';
}

//--03----------NUMBER EVENTS-------------------
const numbers = document.querySelectorAll(".number");

numbers.forEach(number => {
    number.addEventListener('click', (event) => {
        inputNumber(event.target.value); //value is assigned first input first
        updateScreen(currentNumber); //push new number to screen
    }); 
});

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number //string concentation because 'currentNumber' stored as a string
    }
}

//--04----------CALCULATION-------------------
const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
});

const calculate = () => {
    let result ='';
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break
        case "*":
            result = prevNumber * currentNumber;
            break
        case "/":
            result = prevNumber / currentNumber;
            break
        default:
            break
    }
    currentNumber = result;
    calculationOperator = '';

}

//--05----------AC BUTTON-------------------
const clearBtn = document.querySelector(".all-clear");

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}

clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
});

//--06----------DECIMALS-------------------
const decimal = document.querySelector(".decimal");

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});

inputDecimal = (dot) => {
    if(currentNumber.includes(".")) {
        return
    } 
    currentNumber += dot
}

//--07----------PERCENTAGE-------------------
const percentage = document.querySelector(".percentage");

const percent = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = currentNumber * 0.01;
}
percentage.addEventListener("click", () => {
    percent();
    updateScreen(currentNumber);
});



//for (let i=0, i>0, i++){
