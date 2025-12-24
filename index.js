'use strict';

const globalVar = 'Я глобальная';
let changeableVar = 100;

const user = {
    name: 'Матвей',
    age: 25,
    city: 'Дзержинск',

    // Сокращённый метод (ES6)
    greet() {
        console.log(`Привет, я ${this.name}`);
    },

    // Обычный метод
    updateAge(newAge) {
        this.age = newAge;
    }
};

user.country = 'RUSSIA';
delete user.city;

const userJSON = JSON.stringify(user);
const parsedUser = JSON.parse(userJSON);

function sum(a, b) {
    return a + b;
}

const multiply = function(x, y) {
    return x * y;
};

function processNumbers(num1, num2, callback) {
    return callback(num1, num2);
}

const result = processNumbers(5, 3, sum); // 8

const original = { a: 1, b: { inner: 'текст' } };


const shallowCopy = { ...original };

const deepCopy = JSON.parse(JSON.stringify(original));

if (typeof window !== 'undefined') {
    console.log('Высота окна:', window.innerHeight);
} else {
    console.log('Запущено не в браузере (вероятно, Node.js)');
}

console.log('Глобальный объект:', globalThis);

console.log('Лог:', user);
console.dir(user); // Структура объекта
console.table([user, parsedUser]); // Табличный вывод

function scopeExample() {
    const localVar = 'Я локальная';
    console.log(localVar);
    console.log(globalVar); // Доступ к глобальной

    // Вложенная функция
    function inner() {
        console.log('Внутренняя функция видит:', localVar);
    }
    inner();
}

scopeExample();


let a = 10;
let b = 5;

const sumResult = a + b;
const isGreater = a > b;

const logicalAnd = (a > 0) && (b > 0);
const logicalOr = (a < 0) || (b > 0);

// Присваивание с операцией
a += 3; // a = 13

user.greet();
user.updateAge(26);
console.log('Новый возраст:', user.age);

console.log('Старт');
setTimeout(() => {
    console.log('Выполнено через 500мс');
}, 500);

console.log('Тип user:', typeof user);
console.log('Тип sum:', typeof sum);

console.log('\n=== ИТОГИ ===');
console.log('Глобальная переменная:', globalVar);
console.log('Объект user:', user);
console.log('user в JSON:', userJSON);
console.log('Результат сложения:', result);
console.log('Копия original:', deepCopy);


console.log(Boolean("")); // false
console.log(!!0); // false
console.log(!!"Hello"); // true

let value;
console.log(typeof value === "undefined"); // true
console.log(typeof 10 === "number"); // true

console.log(!10); // false
console.log(!!0); // false
console.log(!!"text"); // true

console.log("Hello" && "World"); // "World"
console.log("" || "Default"); // "Default"

let userName = someInput || "Guest";

let isLogged = true;
isLogged && console.log("User is logged in");

const button = { id: 1, text: "Click" };
const redButton = { ...button, color: "red" };
console.log(redButton);

const obj1 = { x: 1, y: 2 };
const obj2 = { y: 3, z: 4 };
const merged = { ...obj1, ...obj2 };

let name = "John";
let greeting = `Hello, ${name}!`;
console.log(greeting);

console.log(10 + " apples");

const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

setTimeout(() => console.log("Delayed message"), 1000);


const multiply = (value, multiplier = 1) => value * multiplier;

const createPost = (post, createdAt = new Date()) => ({
    ...post,
    createdAt
});
const post = { id: 1, title: "News" };
console.log(createPost(post));

try {
    throw new Error("Something went wrong");
} catch (error) {
    console.error(error.message);
}
console.log("Code continues");

const arr = [1, 2];
arr.push(3);
console.log(arr);
arr.pop();
console.log(arr);

const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit, index) => console.log(`${index}: ${fruit}`));

const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2);
console.log(doubled);
console.log(numbers);

const arr = [1, 2, 3];
const result = arr.map((x) => x * 3);
console.log(result); // [3, 6, 9]

const wrong = arr.map((x) => { x * 3; });
console.log(wrong);

const userProfile = { name: "Матвей", commentQuantity: 23, isAgreement: true };
const { name, commentQuantity } = userProfile;
console.log(name);
console.log(commentQuantity);

const fruits = ["apple", "banana"];
const [fruitOne, fruitTwo] = fruits;
console.log(fruitOne); // "apple"
console.log(fruitTwo); // "banana"


const userInfo = ({ name, commentQuantity }) => {
    if (!commentQuantity) return `User ${name} has no comments`;
    return `User ${name} has ${commentQuantity} comments`;
};
const profile = { name: "Alice", commentQuantity: 5 };
console.log(userInfo(profile));

let value = 10;
if (value > 5) {
    value += 20;
}
console.log(value);


let age = 25;
if (age > 18) {
    console.log("Adult");
}
if (age >= 12 && age <= 18) {
    console.log("Teenager");
}
if (age < 12) {
    console.log("Child");
}


function sumPositiveNums(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "One of the arguments is not a number";
    }
    if (a <= 0 || b <= 0) {
        return "Numbers are not positive";
    }
    return a + b;
}
console.log(sumPositiveNums(3, 8));





