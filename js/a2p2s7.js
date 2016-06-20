//Coin Flip Streak
var coinFlip;
var i=0;

do {
    coinFlip = Math.round(Math.random()); 
    window.console.log(coinFlip);
    if (coinFlip == 0){window.console.log("Heads");}else{ window.console.log("Tails")};
    i += 1;
   
} while (coinFlip == 0);



