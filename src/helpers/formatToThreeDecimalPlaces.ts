export function formatToThreeDecimalPlaces(number = 0): string {
  return number.toLocaleString("en-US", {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  });
}
