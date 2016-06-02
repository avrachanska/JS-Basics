// codeacademy code
var troll = prompt("You're walking through the forest, minding your own business, and you run into a troll! Do you FIGHT him, PAY him, or RUN?").toUpperCase();

switch(troll) {
  case 'FIGHT':
    var strong = prompt("How courageous! Are you strong (YES or NO)?").toUpperCase();
    var smart = prompt("Are you smart?").toUpperCase();
    if(strong === 'YES' || smart === 'YES') {
      console.log("You only need one of the two! You beat the troll--nice work!");
    } else {
      console.log("You're not strong OR smart? Well, if you were smarter, you probably wouldn't have tried to fight a troll. You lose!");
    }
    break;
  case 'PAY':
    var money = prompt("All right, we'll pay the troll. Do you have any money (YES or NO)?").toUpperCase();
    var dollars = prompt("Is your money in Troll Dollars?").toUpperCase();
    if(money === 'YES' && dollars === 'YES') {
      console.log("Great! You pay the troll and continue on your merry way.");
    } else {
      console.log("Dang! This troll only takes Troll Dollars. You get whomped!");
    }
    break;
  case 'RUN':
    var fast = prompt("Let's book it! Are you fast (YES or NO)?").toUpperCase();
    var headStart = prompt("Did you get a head start?").toUpperCase();
    if(fast === 'YES' || headStart === 'YES') {
      console.log("You got away--barely! You live to stroll through the forest another day.");
    } else {
      console.log("You're not fast and you didn't get a head start? You never had a chance! The troll eats you.");
    }
    break;
  default:
    console.log("I didn't understand your choice. Hit Run and try again, this time picking FIGHT, PAY, or RUN!");
}

//my version of the exercise
var deptCollector = prompt('You are at home ...  resting ... when someone rings at the door. You go to see who it is. It is a tall man with a trench coat and a black hat. At first sight, he seems like a detective from an old movie. The truth is that some relative of yours has a lot of depts and you are his contact for these matters. The collector threatens you with a law suit. What would you do - give him the proper ADDRESS, PAY the depts of your relative or IGNORE the man?').toUpperCase();

switch (deptCollector) {
    case 'ADDRESS':
        var strong = prompt('Are you a strong person (YES or NO)?').toUpperCase();
        var smart = prompt('Are you a smart person (YES or NO)?').toUpperCase();
        if (strong === 'YES' || smart === 'YES') {
            console.log('You decide to tell the man that you did not agree to such thing, and all you can do for him is to provide the address of your relative');
        } else {
                console.log('Well, you cannot think of what to say and the collector got the money out of you.');
            }
        break;
    case 'PAY':
        var now = prompt('Do you have all the money now (YES or NO)?').toUpperCase();
        var cash = prompt('Do you have the amount in cash (YES or NO)?').toUpperCase();
        if (now === 'YES' && cash === 'YES') {
            console.log('You know that your relative is in difficult situation and you decide to help him out by paying his depts.');
        } else {
                console.log('The collector wants the money now and he takes only cash. You cannot pay him now, but you promised to have the sum tomorrow.');
            }
        break;
    case 'IGNORE':
        console.log('As soon as you hear that this does not concern you, you close the door and return to your rest.');
        break;
    default:
        console.log('You are shocked by the threats and you start mumbling non-sense. The man did not understand your answer. Hit Run and try again, this time picking ADDRESS, PAY, or IGNORE!');
    }
