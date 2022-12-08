function leftToggler() {
  console.log(document.getElementById("nav"));
  document.getElementById("nav").style.left = "0%";
}

function closeToggler() {
  console.log(document.getElementById("nav"));
  document.getElementById("nav").style.left = "100%";
}

//

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);

var ourStr = "I come first " + "I come second";
console.log(ourStr);

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence ";
myStr += "I am the third Sentence";
console.log(myStr);

var myName = "Yetunde";
var myString = "My name is " + myName + ". Welcome to my Blog";
console.log(myString);

var someAdjective = "Beautiful";
var myString = "Learning how to code is ";
myString+= someAdjective;
console.log(myString);
