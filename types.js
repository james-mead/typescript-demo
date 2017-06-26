var myName = "James";
var myAge = 31;
var canVote = true;
var anything = "Dog";
anything = 4;
document.getElementById("tsStuff").innerHTML = "My name is " + myName;
document.write("myName is a " + typeof (myName) + "<br />");
document.write("myAge is a " + typeof (myAge) + "<br />");
document.write("canVote is a " + typeof (canVote) + "<br />");
document.write("anything is a " + typeof (anything) + "<br />");
// converting data types
var strToNum = parseInt("5");
var numToString = 5;
document.write("numToStr is a " + typeof (numToString.toString()));
var PI = 3.14159;
