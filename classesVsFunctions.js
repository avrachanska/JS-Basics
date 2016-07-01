//same result achieved with both classes and functions

//functions
function Person(name,age) {
  this.name = name;
  this.age = age;
}
// a function that prints the name of any given person
var printPersonName = function (p) {
  console.log(p.name);
};

var bob = new Person("Bob Smith", 30);
printPersonName(bob);
var me = new Person("Aleks", 27);
printPersonName(me);

//class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  get printPersonName() {
    console.log(this.name);
  }
}

var bob = new Person("Bob Smith", 30);
var me = new Person("Aleks", 27);

bob.printPersonName;
me.printPersonName;
