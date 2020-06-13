const greekGods = [
  "Aphrodite",
  "Ares",
  "Artemis",
  "Athena",
  "Poseidon",
  "Zeus",
];


// 1. Console.log() the name of the first and second god in the list
// 2. Console.log() the name of the first god after 3 seconds, and the name of the second god after 1 second


// THis print out as it is set to 3 seconds
setTimeout(function() {
  console.log(greekGods[0])
}, 3000);

// THis print out as it is set to 1 second.
setTimeout(function() {
  console.log(greekGods[1]);
}, 1000);