const crypto = require("crypto");
const fs = require("fs").promises;

const SHA256 = "sha256";
const MD5 = "md5";

const supportedAlgorithms = [SHA256, MD5];

const validateAlgorithm = (algorithm) => {
  if (!supportedAlgorithms.includes(algorithm)) {
    throw new Error(`Unsupported algorithm: ${algorithm}`);
  }
};

const createHash = (algorithm, input) => {
  validateAlgorithm(algorithm);
  const hash = crypto.createHash(algorithm);
  hash.update(input);
  return hash.digest("hex");
};

const saltedHash = (
  input,
  algorithm = SHA256,
  saltLength = 16,
  iterations = 1000
) => {
  validateAlgorithm(algorithm);
  const salt = crypto.randomBytes(saltLength).toString("hex");
  const hash = crypto.pbkdf2Sync(input, salt, iterations, 64, algorithm);
  return {
    salt,
    hash: hash.toString("hex"),
  };
};

const stringHash = (input, algorithm = SHA256) => createHash(algorithm, input);

const fileHash = async (path, algorithm = SHA256) => {
  validateAlgorithm(algorithm);
  const fileBuffer = await fs.readFile(path);
  return createHash(algorithm, fileBuffer);
};

const compareHash = (hash1, hash2) => hash1 === hash2;

module.exports = {
  saltedHash,
  stringHash,
  fileHash,
  compareHash,
};
