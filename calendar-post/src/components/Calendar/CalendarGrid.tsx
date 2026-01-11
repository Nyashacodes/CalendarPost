import CalendarDayCell from "./CalendarDayCell";
import { WEEKDAYS } from "../../utils/dateUtils";

interface Props {
  days: (number | null)[];
  selectedDay: number | null;
  onSelectDay: (day: number) => void;
  postCounts: Record<number, number>;
}

export default function CalendarGrid({
  days,
  selectedDay,
  onSelectDay,
  postCounts,
}: Props) {
  return (
    <div>
      <div className="grid grid-cols-7 text-xs text-gray-400 mb-2">
        {WEEKDAYS.map((d) => (
          <div key={d} className="text-center">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((day, i) => (
          <CalendarDayCell
            key={i}
            day={day ?? undefined}
            count={day ? postCounts[day] ?? 0 : 0}
            isSelected={day === selectedDay}
            onClick={() => day && onSelectDay(day)}
          />
        ))}
      </div>
    </div>
  );
}
