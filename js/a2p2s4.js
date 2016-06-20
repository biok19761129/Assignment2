// Hitchhiker’s Guide to the Galaxy

var userIsReady = window.confirm("Are you ready to play?");
if (userIsReady){
    window.alert("Awesome, our hero is waiting!");
}else {
    window.alert("Too bad, we’re going to play anyway because our hero desperately needs your help!");
}

window.alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…");

var direction = window.prompt("Which direction would you like to head? (please enter forward, left, or right).");

switch (direction)
    {
        case "forward":
            window.alert("You walk about 100 yards and safely make your way out of the cave.");
            break;
        case "left":
            window.alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
            break;
        case "right":
            window.alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever");
        default:
            window.alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser");
    }

var userRate = window.prompt("Please rate my game from 1 to 10:");

if (Number(userRate)<=10){ window.console.log("Is digit");
}else {
     window.console.log("Is text");
    userRate = 10;};

if (Number(userRate)>5) {window.alert("Thank you, we will continue to make improvements to the game!");}
else{ window.alert("Whatever, you weren’t very good at this game anyway!");}
