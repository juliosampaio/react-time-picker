export const padDigits = (number, digits, pad) => {
  return Array(Math.max(digits - String(number).length + 1, 0)).join(pad) + number;
}

export const zeroPad = (number, digits = 2) => padDigits(number, digits, 0)
