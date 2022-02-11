const add = function(a,b) {
    let sum = parseInt(a) + parseInt(b)
	return sum;
};

const subtract = function(a,b) {
    let outcome = parseInt(a) - parseInt(b)
	return outcome;
};

const multiply = function(a,b) {
    let product = parseInt(a) * parseInt(b)
	return product;
};

const divide = function(a,b) {
    let outcome = parseInt(a) / parseInt(b)
    if (a === 0 || b === 0) {
        return 'ERR';
    } else {
        return outcome;
    }
};

const operate = function(operator, num1, num2) {
    const display = document.querySelector('.output');
    if (operator === add || operator === subtract || operator === multiply || operator === divide) {
        return display.innerHTML = operator(num1,num2);
    } else {
        return -1;
    }
};

// console.log(operate(subtract, 2, 3))

// function that listens for a click of the buttons
// and gets the value to display to the output(h3)
const calc = []
const btnValue = function(e) {
    let clickedButton = e.target.getAttribute('name');
    const display = document.querySelector('.output');
    calc.push(clickedButton)
    function displayValue(btn) {
        display.innerHTML = btn
        // if the buttonclicked is . or - cases
        // if(btn === '.') {
        //     let text = document.createTextNode(".")
        //     display.appendChild(text)
        // }
        if(btn === '=') {
            if (calc[1] === '+') {
                operate(add,calc[0],calc[2])
            } else if (calc[1] === '*') {
                operate(multiply,calc[0],calc[2])
            } else if (calc[1] === '-') {
                operate(subtract,calc[0],calc[2])
            } else if (calc[1] === '/') {
                operate(divide,calc[0],calc[2])
            } else {
                return
            }
        } else if(btn === 'clear') {
            window.location.reload()
        } else {
            return
        }
    }
    
    console.log(calc)
    return displayValue(clickedButton)
}



const buttonClick = document.querySelectorAll('.button');

for (var i = 0 ; i < buttonClick.length; i++) {
    buttonClick[i].addEventListener('click' , btnValue ) ; 
 }

