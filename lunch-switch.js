//my code
var lunch = prompt('What do you prefer as lunch?', '');

switch (lunch) {
	case 'salad':
		console.log('Sure thing! One salad, coming up.');
		break;
	case 'sandwich':
		console.log('Sure thing! One sandwich, coming up.');
		break;
	case 'soup':
		console.log('Sure thing! One soup, coming up.');
		break;
	case 'sweets':
		console.log('Sure thing! Some sweets, coming up.');
		break;
	case 'pie':
		console.log('Sure thing! One pie, coming up.');
		break;
	case 'fries with cheese and ketchup':
		console.log('Sure thing! Some fries with cheese and ketchup, coming up.');
		break;
	default:
		console.log("Hmm! We don't have " + lunch + " on the menu. How does a pie sound?");
}

//codeacademy code
/*var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

switch(lunch){
  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
    console.log("Got it! Tomato's my favorite.");
    break;
  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
    console.log("Pie's not a meal!");
    break;
  default:
    console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}*/