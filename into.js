

// function myfunction(operation){
//     let num1 = parseFloat(document.getElementById("num1").Value)
//     let num2 = parseFloat(document.getElementById("num2").Value)
    // let num1 = parseFloat(document.getElementById("num1").value);

    // let result;

    // if(isNaN(num1) || isNaN(num2)){
    //     alert("Fields are empty")
    //     return;
    // }

    function calculate(operation) {
        let num1 = parseFloat(document.getElementById("num1").value);
        let num2 = parseFloat(document.getElementById("num2").value);
        let result;
        
        if (isNaN(num1) || isNaN(num2)) {
            alert("Please enter valid numbers");
            return;
        }
    
        if (operation === 'sum') {
            result = num1 + num2;
        } else if (operation === 'sub') {
            result = num1 - num2;
        }
        document.getElementById("demo").innerText = "Result: " + result;


}
