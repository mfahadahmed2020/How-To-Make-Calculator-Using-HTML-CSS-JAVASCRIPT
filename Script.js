// const display =document.getElementById("display");

// function calculate(input) {
//     display.value += input;
// }




// function clearDisplay() {
//     display.value = "";
    
// }

// function calculator() {
//     try{
//     display.value = eval(display.value);
//     }
//     catch(error){
//         display.value = "Error"
//     }
  
// }

const display = document.getElementById("display");

function calculate(input) {
    display.value += input; 
    
}
function calculator(){
    try{
        display.value =eval(display.value)
    }
    catch{
        display.value ="Error"
    }
}

function clearDisplay() {
    display.value = "";
    
}