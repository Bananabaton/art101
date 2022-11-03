/**
 * Author:    Nicholas Eyestone & Vanessa Ho
 * Created:   11.02.2022
 **/
var outputEl = document.getElementById("output");

var new1El = document.createElement("p");
  new1El.id = "p";
  new1El.innerHTML = "Look, a new element!";
  document.body.appendChild(new1El);

var new2El = document.createElement("p2");
  new2El.id = "p2";
  new2El.innerHTML = "This is a second new element!";
  document.body.appendChild(new2El);

document.getElementById("p").style.font = "bold 20px noto,sans-serif";
document.getElementById("p").style.color = "#792c08";
document.getElementById("p").style.marginLeft = "20px";

document.getElementById("p2").style.font = "bold 20px noto,sans-serif";
document.getElementById("p2").style.color = "#792c08";
document.getElementById("p2").style.marginLeft = "35px";

document.getElementById("output").style.border = "dashed 15px #Ceb23b";
