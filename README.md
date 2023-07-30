# HashUtility

`HashUtility` is a library providing convenient hash-related operations. It leverages Node.js's native `crypto` module to create and manipulate hash strings.

## Features

1. **String Hashing**: Hash a given string using either the SHA-256 or MD5 algorithm.
2. **File Hashing**: Hash a file content using either the SHA-256 or MD5 algorithm.
3. **Hash Comparison**: Compare two hash strings to check if they are equal.

## Methods

### `stringHash(input, algorithm)`

Hashes a given string using the specified algorithm. If no algorithm is provided, it defaults to SHA-256.

- **Parameters**:
  - `input`: The input string to hash.
  - `algorithm`: The hashing algorithm to use. Supported values are `"sha256"` and `"md5"` (optional, default `"sha256"`).

### `fileHash(path, algorithm)`

Asynchronously hashes the content of a file at the given path using the specified algorithm. If no algorithm is provided, it defaults to SHA-256.

- **Parameters**:
  - `path`: The path to the file to hash.
  - `algorithm`: The hashing algorithm to use. Supported values are `"sha256"` and `"md5"` (optional, default `"sha256"`).

### `compareHash(hash1, hash2)`

Compares two hash strings for equality.

- **Parameters**:
  - `hash1`: The first hash string to compare.
  - `hash2`: The second hash string to compare.

## Example Usage

```javascript
const HashUtility = require("./path/to/HashUtility");

const hash1 = HashUtility.stringHash("Hello World", "md5");
const hash2 = HashUtility.fileHash("/path/to/file.txt");

const areEqual = HashUtility.compareHash(hash1, hash2);

console.log(areEqual ? "Hashes are equal" : "Hashes are not equal");
```

## Error Handling

If an unsupported algorithm is provided to either `stringHash` or `fileHash`, an error will be thrown with the message `Unsupported algorithm: {algorithm}`.

## Installation

In progress...
