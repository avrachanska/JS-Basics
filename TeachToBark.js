function Dog (breed) {
  this.breed = breed;
  this.bark = function() {
    console.log("Woof");  
    }
}

var buddy = new Dog("Golden Retriever");
var snoopy = new Dog("Beagle");

buddy.bark();
snoopy.bark();
