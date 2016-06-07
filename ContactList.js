//my code
var friends = {
    bill: {
        firstName: 'Bill',
        lastName: 'Gates',
        number: '+44 123 123',
        address: ['One Microsoft Way','Redmond','WA','98052']
    },
    steve: {
        firstName: 'Steve',
        lastName: 'Jobs',
        number: '+44 565 656',
        address: ['San Francisco', 'California', 'U.S.', '80123']
    },
    bili: {
        firstName: 'Billiana',
        lastName: 'Krastanova',
        number: '+359 789 789',
        address: ['Kosteets', 'Sofia', 'Bulgaria', '2030']
    },
    juls: {
        firstName: 'Julia',
        lastName: 'Nikodimova',
        number: '+359 321 321',
        address: ['Sofia', 'Sofia', 'Bulgaria', '1117']
    },
    poli: {
        firstName: 'Polina',
        lastName: 'Petkova',
        number: '+359 456 456',
        address: ['Teteven', 'Sofia', 'Bulgaria', '1117']
    }
};
var list = function (object) {
    for (var k1 in object) {
        console.log(k1);
    }
};

var search = function (name) {
    for (var key in friends) {
        if (friends[key].firstName === name) {
        console.log(friends[key]);
        return friends[key];
        }    
    }
};

/*codeacademy
var friends = {};
friends.bill = {
  firstName: "Bill",
  lastName: "Gates",
  number: "(206) 555-5555",
  address: ['One Microsoft Way','Redmond','WA','98052']
};
friends.steve = {
  firstName: "Steve",
  lastName: "Jobs",
  number: "(408) 555-5555",
  address: ['1 Infinite Loop','Cupertino','CA','95014']
};

var list = function(obj) {
  for(var prop in obj) {
    console.log(prop);
  }
};

var search = function(name) {
  for(var prop in friends) {
    if(friends[prop].firstName === name) {
      console.log(friends[prop]);
      return friends[prop];
    }
  }
};

list(friends);
search("Steve");
*/
