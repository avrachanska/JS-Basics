//altered JS code from codeacademy

// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};

var setCountry = function (newCountry) {
    this.country = newCountry;
};

// now we make bob
var bill = new Object();
bill.age = 30;
bill.country = "United States";
// and down here we just use the method we already made
bill.setAge = setAge;
bill.setCountry = setCountry;
  
// change bob's age to 50 here
bill.setAge(50);
console.log(bill.age);
bill.setCountry("Bulgaria");
console.log(bill.country);
