import CalendarDayCell from "./CalendarDayCell";

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function CalendarGrid() {
  return (
    <div>
      <div className="grid grid-cols-7 text-xs text-gray-400 mb-2">
        {WEEKDAYS.map((day) => (
          <div key={day} className="text-center">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 31 }, (_, i) => (
          <CalendarDayCell key={i} day={i + 1} />
        ))}
      </div>
    </div>
  );
}
