export function formatDate(
  date: number | Date,
  month: "short" | "long" = "short",
): string {
  return new Intl.DateTimeFormat("en-US", {
    month,
    day: "numeric",
    year: "numeric",
  }).format(date);
}
