var buttons=document.getElementsByClassName('button');
var display=document.getElementById('display');

var operand1=0;
var operand2=null;
var operator=null;

function isOperator(value){
    // if(value=="x"){
    //     return value=="*";
    // }
    return value == "+" || value == "-" || value == "*" || value == "/";
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(){
        // var value=this.getAttribute('data-value');
        // if (value=='+') { //if an operator is clicked
        //     operator='+';
        //     operand1=parseFloat(display.textContent);
        // }
        // else if (value=='=') {
        //     operand2=parseFloat(display.textContent);
        //     // use eval to get result
        //     // show result on display
        // }
        // else{
        //     display.innerText +=value;
        // }
        var value = this.getAttribute('data-value');
        var text = display.textContent.trim();

        if (isOperator(value)) {
            // if(value=="×"){
            //     operator="*";
            // }
            // else{
                operator = value;
            // }
            operand1 = parseFloat(text);
            display.textContent = "";
        } else if (value == "ac") {
            display.textContent = "";
        } else if (value == "sign") {
            operand1 = parseFloat(text);
            operand1 = -1 * operand1;
            display.textContent = operand1;
        } else if (value == ".") {
            if (text.length && !text.includes('.')) {
                display.textContent = text + '.';
            }
        } else if (value == "%") {
            operand1 = parseFloat(text);
            operand1 = operand1 / 100;
            display.textContent = operand1
        } else if (value == "=") {
            operand2 = parseFloat(text);
            var result = eval(operand1 + ' ' + operator + ' ' + operand2);
            if (result) {
                display.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        } else {
            display.textContent += value;
        }
    });
    
}