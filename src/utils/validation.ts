/**
 * Checks if a phone number matches the Indian mobile format:
 * - Optional +91 or 0 prefix
 * - 10 digits starting with 6, 7, 8, or 9
 */
export function isValidIndianPhone(phone: string): boolean {
  if (!phone) return false;
  const phoneRegex = /^(?:\+91|0)?[6789]\d{9}$/;
  return phoneRegex.test(phone.replace(/[\s-]/g, ''));
}

/**
 * Basic email format validation
 */
export function isValidEmail(email: string): boolean {
  if (!email) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
