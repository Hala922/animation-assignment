interface Person {
    firstName: string;
    lastName: string;
}

function greeting(person: Person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName;
}

var user = 'Jane the User';
var randomArray = [0, 1, 2];

// Has to match with the Person interface for it to compile
var userPerson = {
    firstName: 'Jane',
    lastName: 'Foster',
}

var greetUser = greeting(userPerson);
console.log(greetUser);