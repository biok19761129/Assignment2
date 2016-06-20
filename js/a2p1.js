//APP 1 - length of characters in the person’s name
/*
var userName = window.prompt("Please type your name:");
var userNameLengh = userName.length;
window.alert("Your name has " + userNameLengh + " letters");
*/

//APP 2 - The X letter of your Name is:
/*
var userName = window.prompt("Please type your name:");
var userNumber = window.prompt("Type a Numeric value");
window.alert("The "+ userNumber + " letter of your Name is: " + userName.charAt(userNumber -1 ));
*/

//APP 3 - Your name is A + B
/*
var userName = window.prompt("Please type your name:");
var userLastname = window.prompt("Please type your latsname:");
window.alert("Your name is: " + userName + " " + userLastname);
*/

//APP 4 - Index of fox
/*
var theIndex = "The quick brown fox jumps over the lazy dog";
window.alert(theIndex.indexOf("fox"));
*/


//APP 5 -  Last Index of fox
/*
var theLastIndex = "The quick brown fox jumps over the lazy fox";
window.alert(theLastIndex.lastIndexOf("fox"));
*/

//APP 6 - Replace lazy dog for user's name
/*
var myString = "The quick brown fox jumped over the lazy dog";
var userName = window.prompt("Please, type your name:");
window.alert(myString.replace("the lazy dog", userName));
*/

//APP 7 - Regular Expression
/*
var myString = "The quick brown fox jumped over the lazy dog";
var userWord = window.prompt("Please, type a word:");
var myExpression = new RegExp(userWord, 'g');
window.alert(myString.match(myExpression));
*/

//APP 8 - Substract "THE LAZY DOG"
/*
var old_string = "The quick brown fox jumped over the lazy dog";
var new_string = old_string.substr(32, 44);
window.alert(new_string.toUpperCase());
*/

//APP 9 - Trim string to lower case.
/*
var myString = "           THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
window.alert(myString.trim().toLowerCase());
*/

//APP 10 - first letter capitalized
/*
var myString = "the quick brown fox jumped over the lazy dog";
var strLenght = myString.length;
window.alert(myString.substr(0,1).toUpperCase() + myString.substr(1,strLenght));
*/


































