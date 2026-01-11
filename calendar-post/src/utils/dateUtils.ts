export const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

// JS getDay() already returns Sunday(0) → Saturday(6)
export function getStartDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

export function formatDateKey(
  year: number,
  month: number,
  day: number
) {
  const dd = String(day).padStart(2, "0");
  const mm = String(month + 1).padStart(2, "0");
  return `${dd}-${mm}-${year}`;
}
