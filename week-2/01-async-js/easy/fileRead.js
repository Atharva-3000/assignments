// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.

const fs = require("fs").promises;

async function reader() {
  try {
    const data = await fs.readFile("read.txt", "utf-8");
    console.log(data);
  } catch (err) {
    console.error("Error reading file:", err);
  }
}

async function main() {
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }
  console.log(sum);

  // Call the asynchronous function using await
  await reader();
}

// Call the main function
main();
