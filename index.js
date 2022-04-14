/*
let user = {
  firstName: "Nazrul",
  lastName: "Islam",
  favLang: "Javascript",
  printUserDetails: function () {
    console.log(`${this.firstName} ${this.lastName} Loves ${this.favLang}`);
  },
};

user.printUserDetails();

//array
let myArr = ["Nazrul", 17, true, { greet: "Hello" }, null];
console.log(myArr);

//function
function greet(name, greeting) {
  console.log(`${greeting} from ${name}`);
}

greet("Nazrul", "Salaam");

//operators
let x = 10;
console.log(x++);

//equality operators
let y = 10;
let k = "10";

if (y === k) {
  console.log("y is equal to k");
} else console.log("Not Equal");

//truthy & falsy value
let a = false;
let b = 0;
let c = null;
let d = "";
let e = NaN;

let z = a || b || c || d || e;
console.log(z);
// Z will log the first truthy value it can find or the last falsy value in the list.

//objects in JS
const subjects = ["javascript", "html", "css", "sass"];
for (let subject of subjects) {
  console.log(subject);
}

let bank = {
  bank: "HDFC BANK",
  name: "Nazrul Islam",
  accNo: 50100353332260,
};
console.log(bank);
bank.IFSC = "HDFC0002581";
console.log(bank);

//factory function to create an account
function createAccount(
  accountName,
  accountType,
  isActive,
  accountBalance
) {
  let account = {
    name: accountName,
    type: accountType,
    active: isActive,
    balance: accountBalance,
    print: function () {
      console.log(
        "Name:",
        this.name,
        "Type:",
        this.type,
        "Account Balance:",
        this.balance,
        "Active:",
        this.active
      );
    },
  };
  return account;
}
const nazrulAccount = createAccount("Nazrul", "Savings", 10000, true);
nazrulAccount.print();
function createUser(firstName, lastName) {
  let user = {};
  user.firstName = firstName;
  user.lastName = lastName;

  user.sayFullName = function () {
    console.log(firstName, lastName);
  };
  return user;
}
let user1 = createUser("Virat", "Kohli");
console.log(user1);
user1.sayFullName();

function SayHello(favSubject, favFood) {
    console.log('Hello from', this.name);
    console.log('I love', favSubject, '&', favFood);
}
//SayHello.call({name: 'Nazrul' }, 'JS', 'Pizza');

//SayHello.apply({ name: 'Nazrul' }, [ 'JS' , 'Pizza']);

const sayHelloToKnight = SayHello.bind({ name: 'Thanos' });
sayHelloToKnight('TS', 'Jalabi')

//value & refrence Type
let x = 10;
let y = x;
x = 20;
console.log("X:", x);
console.log("Y:", y);
let a = { value: 10 };
let b = a;
b.value = 20;
console.log("A:", a);
console.log("B:", b

//arrow functyion
let sum = (a, b) => a + b;
console.log(sum(5, 10));

//array shift unshift
let arry = [1, 2, 3, 4, 5, 6];
let addItem = function (num) {
  arry.push(num);
};
let delItem = function (num) {
  return arry.shift();
};

addItem(7);
addItem(8);
console.log(delItem());
console.log(arry);

//slice & splice
var users = ["NNN", "AAA", "ZZZ", "RRR", "UUU", "LLL"];

//console.log(users.slice(1, 3)); //Include first one but exclude last one
users.splice(1, 3, "nazrulislam.dev"); //Starts with 1 & count to 3 - replce with nazrulislam.dev
console.log(users); //Starts with 1 & count to 3


//Must know array methods
const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Phone', price: 500 },
  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 },
];

let arr = [3,4,5,6,1,477,7,98,9,1,34,67,3,,5667,7192];

const newArr = arr.filter((item)=>{
  return item>=100;
});
console.log(newArr);

//filter adds all items <100 to new array
const filteredItems = items.filter((item) => {
  return item.price <= 100;
});
console.log(filteredItems);

//map
const itemNames = items.map((item) => {
  return item.name;
});
console.log(itemNames);
/*
//find
const itemFind = items.find((item) => {
  return (item.name = 'Book');
});
console.log(itemFind);
//forEach
items.forEach((item) => {
  console.log(item.name);
});
//some Return true if any element in the arry is <100
const inExpensive = items.some((item) => {
  return item.price <= 0;
});
console.log(inExpensive);
//EVERY checks all emelemts are <1000
const everyinExpensive = items.every((item) => {
  return item.price <= 1000;
});
console.log(everyinExpensive);
//Reduce take two parameters & sums up the array
const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);
console.log(total);
//includes hecks whether element is inside the array
*/
document.getElementById("demo").innerHTML ="Yeah I Am";
document.getElementById("container").style.background ="red";