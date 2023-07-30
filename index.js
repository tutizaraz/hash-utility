const crypto = require("crypto");
const fs = require("fs").promises;

const SHA256 = "sha256";
const MD5 = "md5";

const HashUtility = {
  saltedHash: (
    input,
    algorithm = SHA256,
    saltLength = 16,
    iterations = 1000
  ) => {
    if (![SHA256, MD5].includes(algorithm)) {
      throw new Error(`Unsupported algorithm: ${algorithm}`);
    }
    const salt = crypto.randomBytes(saltLength).toString("hex");
    const hash = crypto.pbkdf2Sync(input, salt, iterations, 64, algorithm);
    return {
      salt,
      hash: hash.toString("hex"),
    };
  },
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
