const fs = require("fs").promises;

async function processFile() {
  try {
    let readData = await fs.readFile("r&w.txt", "utf-8");

    let betterData = readData.replace(/\s+/g, " ");

    await fs.writeFile("r&w.txt", betterData);

    console.log("File processed successfully.");
  } catch (err) {
    console.error("Error processing file:", err);
  }
}

processFile();
