var myName: string = "James"
var myAge: number = 31
var canVote: boolean = true
var anything: any = "Dog"
anything = 4

document.getElementById("tsStuff").innerHTML = "My name is " + myName
document.write("myName is a " + typeof(myName) + "<br />")
document.write("myAge is a " + typeof(myAge) + "<br />")
document.write("canVote is a " + typeof(canVote) + "<br />")
document.write("anything is a " + typeof(anything) + "<br />")

// converting data types

var strToNum: number = parseInt("5")
var numToString: number = 5
document.write("numToStr is a " + typeof(numToString.toString()))

const PI = 3.14159