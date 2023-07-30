const crypto = require("crypto");
const fs = require("fs").promises;

const SHA256 = "sha256";
const MD5 = "md5";

const HashUtility = {
  stringHash: (input, algorithm = SHA256) => {
    if (![SHA256, MD5].includes(algorithm)) {
      throw new Error(`Unsupported algorithm: ${algorithm}`);
    }
    const hash = crypto.createHash(algorithm);
    hash.update(input);
    return hash.digest("hex");
  },
  fileHash: async (path, algorithm = SHA256) => {
    if (![SHA256, MD5].includes(algorithm)) {
      throw new Error(`Unsupported algorithm: ${algorithm}`);
    }
    const hash = crypto.createHash(algorithm);
    const fileBuffer = await fs.readFile(path);
    hash.update(fileBuffer);
    return hash.digest("hex");
  },
  compareHash: (hash1, hash2) => {
    return hash1 === hash2;
  },
};

module.exports = HashUtility;
