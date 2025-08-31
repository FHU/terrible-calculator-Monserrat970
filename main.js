// Step 1 - Find all the elements we need to interact with
const num1Input = document.getElementById('number1')
const num2Input = document.getElementById('number2')
const operatorSelect = document.getElementById('operator')
const calculateButton = document.getElementById('calculateButton')
const resultSpan = document.getElementById('result')

// Step 2 - Add an event listener to the button to call a function when clicked
calculateButton.addEventListener('click', calculate)

function calculate() {
    const num1 = parseFloat(num1Input.value)
    const num2 = parseFloat(num2Input.value)
    const operator = operatorSelect.value;

    resultSpan.innerText = '?'

    if(isNaN(num1) || isNaN(num2)){
        resultSpan.innerText = "Please enter valid numbers in both fields."
        return
    }

    let result
    if( operator === "+") {
        result = num1 + num2
    }
    else if(operator === "-"){
        result = num1 - num2
    }
    else if(operator === "*"){
        result = num1 * num2
    }
    else if(operator === "/"){
        if (num2 === 0){
            resultSpan.innerText = "Cannot divide by zero."
            return
        }
        result = num1 / num2
    }
    
    // Step 3 - update the result span with the result of the calculation
    resultSpan.innerText = result;
}