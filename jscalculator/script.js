function displayNumber(num){
    inputBox.value+=num
}

function clearBox(){
    inputBox.value=""
}


function evaluateExpression(){
    let expr=inputBox.value;
    let result=eval(expr)
    inputBox.value=result

}