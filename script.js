const add = function(a,b) {
	return b + a;
};

const subtract = function(a,b) {
	return a - b;
};

const multiply = function(a,b) {
	return b * a;
};

const divide = function(a,b) {
    if (a === 0 || b === 0) {
        return 'ERR';
    } else {
        return a / b;
    }
};

const operate = function(operator, num1, num2) {
    if (operator === add || operator === subtract || operator === multiply || operator === divide) {
        return operator(num1,num2);
    } else {
        return -1;
    }
};

// console.log(operate(subtract, 2, 3))
