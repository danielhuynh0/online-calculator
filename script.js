const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.keys');
const display = document.querySelector('.display')

var currentValue = 0;
var currCalculation = 0;
var currOp = "none";
var numOps = 0;

const changeDisplayVal = function(newValue) {
    display.innerText = newValue;
}

const operatorClick = function(key) {
    if(numOps > 0)
    {
        calculate(key, true);
    }
    else
    {
        if(currCalculation == 0)
        {
            currCalculation = currentValue;
            currentValue = 0;
        }
        
    }
    currOp = key.getAttribute("data-action");
    numOps +=1;
}

const numberClick = function(key) {
    let keyVal = parseInt(key.getAttribute("value"));
    currentValue *= 10;
    currentValue += keyVal;
    changeDisplayVal(currentValue);
}

const negativeClick = function(key) {
    if(currentValue == 0)
    {
        currCalculation *= -1;
        changeDisplayVal(currCalculation);
    }
    else if(currentValue != 0)
    {
        currentValue *= -1;
        changeDisplayVal(currentValue);
    }
}

const clearClick = function(key) {
    currentValue = 0;
    changeDisplayVal(currentValue);
    currOp = "none";
    currCalculation = 0;
    numOps = 0;
}

const calculate = function(key, cont) {
    if(currOp == "none")
    {
        return;
    }
    else if(currOp === "add")
    {
        currCalculation += currentValue;
        currentValue = 0;
        changeDisplayVal(currCalculation);
    }
    else if(currOp === "sub")
    {
        currCalculation -= currentValue;
        currentValue = 0;
        changeDisplayVal(currCalculation);
    }
    else if(currOp === "mult")
    {
        currCalculation *= currentValue;
        currentValue = 0;
        changeDisplayVal(currCalculation);
    }
    else if(currOp === "div")
    {
        currCalculation /= currentValue;
        currentValue = 0;
        changeDisplayVal(currCalculation);
    }
    else{
        return;
    }
    if(cont == false)
    {
        numOps = 0;
        currOp = "none";
    }

}

keys.addEventListener('click', (event) => {

    if(event.target.matches('button'))
    {
        var key = event.target;
        if(key.classList.contains('number'))
        {
            numberClick(key);
        }
        else if(key.classList.contains('operator'))
        {
            operatorClick(key);
        }
        else if(key.classList.contains('negative'))
        {
            negativeClick(key);
        }
        else if(key.classList.contains('clear'))
        {
            clearClick(key);
        }
        else if(key.classList.contains('equals'))
        {
            calculate(key, false);
        }

    }
});

