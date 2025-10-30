const person = {
  name: "Jack Daniels",
  age: 24,
  isAdmin: false,
  address: {
    street: "1234 paved st",
    city: "Houston",
    state: "Texas",
  },
  hobbies: ["sports", "drawing", "coding"],
};

console.log(person.name);
console.log(person.address);
console.log(person.hobbies);

person.isAdmin = true;
person.hasChildren = true;

person.greet = function() {
  console.log("hello");
}
person.greet();

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
