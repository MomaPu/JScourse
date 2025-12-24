const user = {
    name: 'Андрей',
    age: 30,
    isStudent: true
};

const userName = 'Андрей';
let userAge = 25;
userAge = 26;

console.log('Hello world');
console.dir(console);
console.table({a: 1, b: 2});
console.log(userName, userAge);


const str = 'текст';
const num = 42;
const bool = true;
const empty = null;
const notDefined = undefined;
const obj = { key: 'value' };


const city = {
    name: 'My city',
    population: 8000000
};

city.name = 'Dzerzhinsk';
city.country = 'RUSSIA';
delete city.population;

console.log(city);

let value = 10;
value = 'текст';
console.log(value); // 'текст'

const fixed = 100;


const name = 'Андрей';
const age = 23;
const userProfile = {
    name,
    age,
    isStudent: false
};
console.log(userProfile);

// В браузере:
console.log(window.innerHeight); // высота окна
// В Node.js:
console.log(global.process.version); // версия Node.js
// Универсально:
console.log(globalThis === window); // true в браузере

const myCity = {
    city: 'My city',
    greeting() {
        console.log('Greetings!');
    }
};
myCity.greeting();





