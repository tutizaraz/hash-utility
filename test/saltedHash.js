const HashUtility = require("./../index");

const { salt, hash } = HashUtility.saltedHash("my-secure-password");

console.log(`Salt: ${salt}`);
console.log(`Hash: ${hash}`);
