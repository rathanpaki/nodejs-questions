const crypto = require("crypto");

function generateRandomHex() {
  // Generate 32 random bytes
  const randomBytes = crypto.randomBytes(32);

  // Convert the bytes to a hexadecimal string
  const hexString = randomBytes.toString("hex");

  return hexString;
}

// Call the function and log the result
const randomHex = generateRandomHex();
console.log("Random 32-byte hexadecimal string:", randomHex);
