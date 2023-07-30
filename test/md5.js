const path = require("path");

const HashUtility = require("./../index");

const MD5 = "md5";
const filePath = path.join(__dirname, "text.txt");

const hashMd5 = HashUtility.stringHash("Hello World", MD5);
console.log(`String Hash (MD5): ${hashMd5}`);

HashUtility.fileHash(filePath, MD5).then((fileHashMd5) => {
  console.log(`File Hash (MD5): ${fileHashMd5}`);

  const isValidMd5 = HashUtility.compareHash(hashMd5, fileHashMd5);
  console.log(`Hashes Match (MD5): ${isValidMd5}`);
});
