let computer;
computer = Math.floor(Math.random() * 3 + 1)
if (computer == 1){
   computer = "Rock";
}
else if (computer == 2){
   computer = "Paper";
}
else{
   computer = "Scissors"
}
console.log(computer);
document.getElementById("butR").onclick = function(){
   if (computer == "Rock"){
      printResultD();
   }
   if (computer == "Paper"){
      printResultL();
   }
   if (computer == "Scissors"){
      printResultV();
   }
}
document.getElementById("butP").onclick = function(){
   if (computer == "Rock"){
      printResultV();
   }
   if (computer == "Paper"){
      printResultD();
   }
   if (computer == "Scissors"){
      printResultL();
   }
}
document.getElementById("butS").onclick = function(){
   if (computer == "Rock"){
      printResultL();
   }
   if (computer == "Paper"){
      printResultV();
   }
   if (computer == "Scissors"){
      printResultD();
   }
}

function printResultD(){
   document.getElementById("result").innerHTML = "Draw!"
}
 function printResultV(){
    document.getElementById("result").innerHTML = "Victory!";
}
 function printResultL(){
   document.getElementById("result").innerHTML = "Try again!";
}