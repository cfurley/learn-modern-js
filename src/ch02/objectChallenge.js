// Library Object for the challenge.
const Library = [
  {
    author: "The Hobbit",
    title: "Tolkien",
    status: {
      own: true,
      reading: false,
      read: false,
    }
  },
  {
    author: "Jesus",
    title: "Bible",
    status: {
      own: true,
      reading: false,
      read: false,
    }
  }
];

// Set books status of read to true.
Library[0].status.read = true;
Library[1].status.read = true;

// Print the library
console.log(Library);

// Turn the Object into a JSON String
const libraryJSON = JSON.stringify(Library);
console.log(libraryJSON);
