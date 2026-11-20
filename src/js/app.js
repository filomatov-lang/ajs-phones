export default function normalizePhone(input) {
  const digits = input.replace(/\D/g, '');

  if (digits.length === 0) {
    return null;
  }

  if (digits.length === 11 && digits.startsWith('8')) {
    return `+7${digits.slice(1)}`;
  }

  return `+${digits}`;
}
