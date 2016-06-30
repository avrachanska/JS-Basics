//to check - printPerson(contacts[0]);
//to check - printPerson(contacts[1]);

var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/
/*function search(lastName){
    var contactsLength = contacts.length;
    for( i = 0; i < contactsLength; i++){
        if(contacts[i].lastName === lastName){
            printPerson(contacts[i]);
        }
    }
}*/
function search(lastName) {
    contacts.forEach(function(contact) {
        if (contact.lastName === lastName) {
            printPerson(contact);
        }
    });
}
search("Jones");

function add(firstName, lastName, email, phoneNumber){
 var friend = {};
    friend.firstName = firstName;
    friend.lastName = lastName;
    friend.phoneNumber = phoneNumber;
    friend.email = email;
    contacts[contacts.length] = friend;
}

/*function add(firstName, lastName, email, phoneNumber){
	object = {
	firstName: firstName,
	lastName: lastName, 
	email: email, 
	phoneNumber: phoneNumber
	};
contacts[contacts.length] = object;
}*/

add("John", "Alden", "johnalden@email.com", "(0887) 123 456)");
list();
