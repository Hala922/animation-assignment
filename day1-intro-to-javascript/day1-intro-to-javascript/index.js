var button = document.getElementById('myButton');
console.log(button);

button.onclick = function () {
    alert('Hello World!');
}

/*
* Fundamentals
*/
/*
* Variables and datatypes
* https://www.sitepoint.com/how-javascript-references-work/
*/
var name = 'Eric';  // This is a string
var age = 46;       // This is a number (specifically an integer)
var isAlive = true; // This is a boolean

// the 3 data types above are called "primitives"
// saved by assignment

// Array
var fruits = [
    'orange', 'kiwi', 'pineapple',
];

// Object literal
var profile = {
    name: name,
    age: age,
    email: 'john@gmail.com',
};

/*
* Evaluations
*/
// Anything that returns a boolean value
console.log('less than', 3 < 5);
console.log('greater than', 10 > 1000);
console.log('less than or equal', 35 <= 35);
console.log('greater than or equal', 5 >= 5)

console.log('equals to', 5 == '5');
console.log('really equals to ', 5 === '5'); // Always use this
console.log('not', 3 !== '3'); // Always use this
console.log('not', !false);

// && - and
// || - or

/*
* Conditionals
*/
if (profile.name === 'Eric') {
    console.log('the truth runs');
} else if (profile.name === 'John') {
    console.log('some other specific condition has been met');
} else {
    console.log('the truth condition has not been met');
}

switch(profile.name) {
    case 'Eric':
        console.log('switch runs for Eric');
    case 'Sandy':
    case 'John':
        console.log('switch runs for John');
        break;
    default:
        console.log('runs if nothing above is satisfied');
}

/*
* Loops
*/
for(var i = 0; i < 3; i++) {
    console.log(i);
}

var s = 0;
while (s < 3) {

    s = s + 1; // s++
}

/*
* Functions
*/
// Declarative function
function sum(a, b) {
    return a + b;
}

// Anonymous function
var diff = function (a, b) {
    return a - b;
};

sum(2, 1);
diff(2, 1);

// Classes
// Car.prototype.move()
// Car.prototype.brake()
class Car {
    constructor(details) {
        // details will be an object
        const { name, color } = details;
        this.name = name;
        this.color = color;
        console.log(`Car has been instantiated as a ${color} ${name}`);
    }

    move() {
        console.log(`It's moving!`);
    }

    brake() {
        console.log(`It's stopping`);
    }

    turn(direction) {
        console.log(`It's turning ${direction}`)
    }
}

const myCar = new Car({
    name: 'Tesla',
    color: 'Black'
});

myCar.turn('right');