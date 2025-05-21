const display=document.getElementById("display");
function appendvalue (value){
    display.value += value;
}
//clear input field
function clearField(){
    display.value="";
}
//calculation value
function calculation(){
    display.value = eval(display.value);
}