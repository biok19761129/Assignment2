// Coin Flip Game
var coinFlip = Math.round((Math.random() *100));
window.console.log(coinFlip);

var choice = window.prompt("Heads or Tails?");

if (choice == "heads" || choice == "Heads" || choice == "HEADS"){choice = true;} else {choice = false;}

window.console.log(choice);


if(coinFlip <=50 && choice){
    window.alert("The flip was heads and you chose heads...you win!");
}else if (coinFlip <=50 && !choice){
    window.alert("The flip was heads and you chose tails...you lose!");
}else if (coinFlip >50 && !choice){
    window.alert("The flip was tails and you chose tails...you win!");
}else if(coinFlip >50 && choice){
    window.alert("The flip was tails and you chose heads...you lose!");
}



