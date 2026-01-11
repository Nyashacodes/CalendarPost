export const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/**
 * Calculates the number of days in a specific month of a year.
 * @param year The year (e.g., 2026)
 * @param month The month index (0 for January, 11 for December)
 * @returns The number of days in the month
 */
export function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

/**
 * Returns the day of the week for the first day of the month.
 * @param year The year (e.g., 2026)
 * @param month The month index (0 for January, 11 for December)
 * @returns The day index (0 for Sunday, 6 for Saturday)
 */
// JS getDay() already returns Sunday(0) → Saturday(6)
export function getStartDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

/**
 * Formats a date into a string key "DD-MM-YYYY".
 * Used for looking up posts in the posts dictionary.
 * @param year The full year
 * @param month The month index (0-11)
 * @param day The day of the month (1-31)
 * @returns Date string in "DD-MM-YYYY" format
 */
export function formatDateKey(
  year: number,
  month: number,
  day: number
) {
  const dd = String(day).padStart(2, "0");
  const mm = String(month + 1).padStart(2, "0");
  return `${dd}-${mm}-${year}`;
}
