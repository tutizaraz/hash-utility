const path = require("path");

const HashUtility = require("./../index");
const SHA256 = "sha256";

const filePath = path.join(__dirname, "text.txt");
const hash = HashUtility.stringHash("Hello World", SHA256);

HashUtility.fileHash(filePath, SHA256).then((fileHash) => {
  console.log(`File Hash (SHA-256): ${fileHash}`);

  const isValid = HashUtility.compareHash(hash, fileHash);
  console.log(`Hashes Match (SHA-256): ${isValid}`);
});
