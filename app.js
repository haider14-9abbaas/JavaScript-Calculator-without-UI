document.write("JavaScript Connected")

let num1=parseFloat(prompt("Enter the first number:"));
let operator=prompt("Enter the operator (+,-,*,/):");
let num2=parseFloat(prompt("Enter the second number:"));

let result;
if (operator ==="+"){
    result=num1 + num2;
}else if(operator ==="-"){
    result=num1-num2;
}else if(operator ==="*"){
    result=num1 * num2;
}else if(operator === "/"){
    if(num2 !== 0){
        result = num1 / num2;}
}else{
        result="Error: Cannot divide by zero";
    }

    alert("Result:" +result)