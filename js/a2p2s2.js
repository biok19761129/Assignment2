//APP 6 -  Current Date
/*
var currentDate = new Date();
window.console.log(currentDate.toDateString());
*/

//APP 7- day on a month 
/*
var currentDate = new Date();
window.console.log(currentDate.getMonth());
*/

//APP 8- Name of the month
/*
var currentDate = new Date();
var dateToString = currentDate.toDateString().split(" ");
window.console.log(dateToString[1]);
*/

//APP 9- Is the weekend????
/*
var currentDate = new Date();
var dateToString = currentDate.toDateString().split(" ");
if (dateToString[0] == "Sat" || dateToString[0] == "Sun"){
    window.console.log("It's the Weekend!!!!!");
}else{
    window.console.log("Sorry, today Is Not a Weekend day.");
}
*/

//APP 10- yesterday
/*
var currentDate = new Date();
var currentDay = currentDate.getDay() -1;
switch(currentDay){
    case 0:
        window.console.log("Yesterday was Sunday")
        break;
    case 1:
        window.console.log("Yesterday was Monday")
        break; 
     case 2:
        window.console.log("Yesterday was Tuesday")
        break;
    case 3:
        window.console.log("Yesterday was Wednesday")
        break;
    case 4:
        window.console.log("Yesterday was Thursday")
        break;
    case 5:
        window.console.log("Yesterday was Friday")
        break; 
    case 6:
        window.console.log("Yesterday was Saturday")
        break;     
}
*/

//APP 11 - First letter of the day of the week.
/*
var currentDate = new Date();
var dateToString = currentDate.toDateString().split(" ");
window.console.log(dateToString[0].slice(0,1));
*/













