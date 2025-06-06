import crypto from 'node:crypto'; // Node's built-in module for cryptography

export function hashPassword(password: string) {
  // Generate a random salt (16 bytes → hex string)
  const salt = crypto.randomBytes(16).toString('hex');

  // Hash password with salt using scrypt (output 64 bytes)
  const hashedPw = crypto.scryptSync(password, salt, 64);
  // Return hashed password and salt as a single string
  return hashedPw.toString('hex') + ':' + salt;
}

export function verifyPassword(storedPw: string, suppliedPw: string) {
  // Split stored string into hashed part and salt
  const [hashedPw, salt] = storedPw.split(':');
  // Convert stored hash from hex to buffer
  const hashedPwBuf = Buffer.from(hashedPw, 'hex');
  // Hash supplied password with same salt
  const suppliedPwBuf = crypto.scryptSync(suppliedPw, salt, 64);
  // Compare buffers securely (avoid timing attacks)
  return crypto.timingSafeEqual(hashedPwBuf, suppliedPwBuf);
}
