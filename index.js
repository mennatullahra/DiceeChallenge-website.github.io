var dice = Math.floor((Math.random()* 6)) + 1;
var srci = "images/dice"+dice+".png"
document.querySelector(".img1").setAttribute("src", srci);

var dice2 = Math.floor((Math.random()* 6)) + 1;
var srci2 = "images/dice"+dice2+".png"
document.querySelector(".img2").setAttribute("src", srci2);

if (dice > dice2) {
  document.querySelector(".title").innerHTML = "PLayer1 Won🎊";
}

if (dice2 > dice) {
  document.querySelector("h1").innerHTML = "🎊PLayer2 Won";
}

if (dice2 === dice) {
  document.querySelector("h1").innerHTML = "Draw!";
}
