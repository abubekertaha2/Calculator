const display=document.getElementById('display');
let calculationPerformed = false;
function appendToDisplay(num){
    if (calculationPerformed){
        display.value = num; 
        calculationPerformed = false;
    }else{
        display.value += num;
    }
    
}
function toCalculate() {
    const expression = display.value;
    let result;

    try {
        result = eval(expression);
    } catch (error) {
        result = 'Error';
    }
    display.value=result;
    calculationPerformed = true;
}
    

function clearToDisplay(){
    display.value=null;
}
function del(){
    display.value=display.value.slice(0, -1);
}
