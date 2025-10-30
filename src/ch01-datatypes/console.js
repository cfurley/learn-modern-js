console.log("This is a LOG.");
console.warn("This is a WARNING.");
console.error("This is an ERROR!");

console.table({name : "Caleb", age: "24"});

console.group('grouping');
console.log("logging");
console.warn("warning");
console.error("error!");
console.groupEnd();

const styles = 'padding: 10px; background-color: white; color: green;';
console.log('%chello world', styles);
