/*jshint multistr:true */

text = "явявявявявя qwqwqwqwqwqw Aleksandra blblblblblblblblblblbl gkgkgkgkgkgkgkg shshshshshh mnmnmnmnmnmnmnmnmnmnm rtrtrtrtrtrtrtr ghghghgh";

var myName = "Aleksandra";
var hits = [];

// Look for "E" in the text
for(var i = 0; i < text.length; i++) {
	if (text[i] === "A") {
		// If we find it, add characters up to
		// the length of my name to the array
		for(var j = i; j < (myName.length + i); j++) {
		    console.log('letter at position', j, '=', text[j]);
			hits.push(text[j]);
		}
	}
}

if (hits.length === 0) {
	console.log("Your name wasn't found!");
} else {
	console.log(hits);
}

//my code

/*var text = 'as we already know, i am Aleksandra and as Aksiniq my name is royal';

var myName = 'Aleksandra';

var hits = [];

for (i = 0; i < text.length; i++){
    if (text[i] === 'A'){
        for (j = i; j < (myName.length + i); j++){
            hits.push(text[j]);
            }
        }
    }
function searchInArray() {
    var line = text.match(myName);
    console.log(line);
    }

if (hits.length === 0){
    console.log("Your name wasn't found!");
    } else {
        console.log(hits);
        }
        
searchInArray();

var xtr = text.indexOf(myName);

if (xtr != -1) {
    console.log(text.substr(xtr, myName.length));
    }*/
