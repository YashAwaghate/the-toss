//prompt("Enter Player 1 Name");
//prompt("Enter Player 2 Name");
var number = Math.floor(Math.random()*6)+1;
var number2 = Math.floor(Math.random()*6)+1;

var randomImageSource = "images/dice" +number+".png";
var randomImageSource2 = "images/dice"+number2+".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (number > number2) {
  document.querySelector("h2").innerHTML = "🚩 Play 1 Wins!";
}
else if (number2 > number) {
  document.querySelector("h2").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h2").innerHTML = "Draw!";
}
