const data = "Hello Bun!";

await Bun.write("file.txt", data);

const fileData = Bun.file("file.txt");
console.log("File data", fileData);
const text = await fileData.text();
console.log("File text", text);
console.log("File size", fileData.size);
