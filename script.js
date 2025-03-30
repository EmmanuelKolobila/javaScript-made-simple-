document.getElementById("div1").innerHTML = "My Page For StartUp"

function myfunction() {
    document.getElementById("div2").innerHTML = "My First javascript Function Awesome!"
}

document.getElementById("kolo").innerHTML = "<h1>How did it work</h1>";

function samation() {
    document.getElementById("sum").innerHTML = "The sum is: " + (parseInt(document.getElementById("num4").value) + parseInt(document.getElementById("num5").value))
}


function calculate(operation) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result;
    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers");
        return;
    }

    if (operation === 'add') {
        result = num1 + num2;
    } else if (operation === 'subtract') {
        result = num1 - num2;
    } else if (operation === 'multiply') {
        result = num1 * num2;
    } else if (operation === 'divide') {
        if (num2 === 0) {
            alert("Cannot divide by zero");
            return;
        }
        result = num1 / num2;
    }
    document.getElementById("result").innerText = "Result: " + result;
}