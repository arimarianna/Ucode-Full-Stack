let guestList = new WeakSet();

let guest1 = { name: "John" };
let guest2 = { name: "Pete" };
let guest3 = { name: "Mary" };
let guest4 = { name: "Liza" };
let guest5 = { name: "Kate" };

guestList.add(guest1)
    .add(guest2)
    .add(guest3);

console.log(guestList.has(guest1));
console.log(guestList.has(guest4));
guestList.delete(guest1);
console.log(guestList.has(guest1));

///////////////////////////////////////

let menu = new WeakMap();

let dish1 = { name: "pasta" };
let dish2 = { name: "tiramisu" };
let dish3 = { name: "lemon tart" };
let dish4 = { name: "ravioli" };
let dish5 = { name: "risotto" };

menu.set(dish1, "15€")
    .set(dish2, "8€")
    .set(dish3, "5€")
    .set(dish4, "10€")
    .set(dish5, "12€");

console.log(menu.get(dish1));

///////////////////////////////////////

let bankVault = new Map();

bankVault.set(1, "100€")
    .set(2, "200€")
    .set(3, "300€")
    .set(4, "400€")
    .set(5, "500€");

console.log(bankVault.get(4));

///////////////////////////////////////

let coinCollection = new Set();

coinCollection.add("coin1")
    .add("coin2")
    .add("coin3")
    .add("coin4")
    .add("coin5");

coinCollection.forEach((value, valueAgain, set) => {
    console.log(value);
});

coinCollection.clear()
console.log(coinCollection)
