//APP 12 - Largest number.
/*
var digOne = window.prompt("Tye a number:");
var digTwo = window.prompt("Type a second number:");
if (Number(digOne) > Number(digTwo)){
    window.console.log("The bigest number is: " + digOne);
}else{
    window.console.log("The bigest number is: " + digTwo);
}
*/

//APP 13 Students and grades.
/*
var studentArray = ["Ursula", "Paul", "Henry", "Tabitha","Lucy"];
var studentMarks = [80, 77, 88, 95, 68];
var arrayL = studentArray.length;
var i;
var studentGrade; 

for (i=0; i<arrayL ; i++)
    {    
        switch (true)
            {
            case (studentMarks[i] < 60):
                    studentGrade = "F";
                    break;
            case (studentMarks[i] < 70):
                    studentGrade = "D";
                    break;
            case (studentMarks[i]< 80):
                    studentGrade = "C";
                    break;
            case (studentMarks[i]< 90):
                    studentGrade = "B";
                    break;
            case (studentMarks[i]< 100):
                    studentGrade = "A";
                    break;         
            }
        window.console.log( "Name: "+ studentArray[i] + " , " + studentMarks[i] + " , Grade: " + studentGrade);
    }
*/

//APP 14 - Odd or Even
/*
var i;
var isType;
for (i=0; i<=15 ; i++)
    {  
        if(i%2 == 0){ isType = "Even"} else { isType = "Odd"};
        window.console.log( i + " Is and " + isType + " Number.")
    }
*/

//APP 15 - 
/*
var i;
var isType;
for (i=0; i<=100 ; i++)
    {  
        if(i%3 == 0 && i%5 == 0){isType = "FizzBuzz"
        }else if(i%5 == 0){isType = "Buzz"
        }else if(i%3 == 0){isType = "Fizz"}
        else{isType = i};

        window.console.log(isType);
    }
*/













