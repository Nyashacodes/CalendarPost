export const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

// Convert JS Sunday(0) → Monday(0)
export function getStartDayOfMonth(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
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
