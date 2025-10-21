let d;

d = new Date();
console.log(d.toString());

d = new Date('10/20/2025 11:11:11');
console.log(d);

d = Date.now();
console.log(d);

d = Date(Date.now()); // Date.now() is oddly formatted so but when passed back into the constructor, it formats it nicer.
console.log(d);