const crypto = require('crypto');

// Generate a random string of specified length
function generateRandomString(length) {
  return crypto.randomBytes(Math.ceil(length / 2))
    .toString('hex')
    .slice(0, length);
}

// Generate JWT secret key
const jwtSecretKey = generateRandomString(32); // You can adjust the length as needed (e.g., 32 for a 256-bit key)

console.log('Generated JWT Secret Key:', jwtSecretKey);
