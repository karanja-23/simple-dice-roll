const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
let min = 1;
let max = 6;
let roll;

myButton.onclick = function(){
  roll = Math.floor(Math.random() * max + min);
  myLabel.textContent = roll; 

}
