// Coin Flip Game - Game Redux 
var coinFlip;
var i;

for (i=0 ; i<10 ; i++)
    {
        coinFlip = Math.round(Math.random());                    
        window.console.log(coinFlip);
        if (coinFlip == 0){window.console.log("Heads");}else{ window.console.log("Tails");}          
    }



