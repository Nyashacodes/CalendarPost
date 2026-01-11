import CalendarDayCell from "./CalendarDayCell";
import { WEEKDAYS } from "../../utils/dateUtils";

interface Props {
  days: (number | null)[];
  selectedDay: number | null;
  onSelectDay: (day: number) => void;
  postCounts: Record<number, number>;
  postsByDay?: Record<number, import("../../data/calendarPosts").Post[]>;
}

export default function CalendarGrid({
  days,
  selectedDay,
  onSelectDay,
  postCounts,
  postsByDay,
}: Props) {
  return (
    <div>
      <div className="mt-4 border border-gray-800 rounded-lg overflow-hidden">
        <div className="w-full grid grid-cols-7 text-xs text-gray-400 bg-transparent px-4 py-3 border-b border-gray-800">
          {WEEKDAYS.map((d) => (
            <div key={d} className="text-center">
              {d}
            </div>
          ))}
        </div>

        <div className="w-full grid grid-cols-7 divide-x divide-y divide-gray-800 auto-rows-[14rem] border-b border-gray-800">
          {days.map((day, i) => (
            <CalendarDayCell
              key={i}
              day={day ?? undefined}
              count={day ? postCounts[day] ?? undefined : undefined}
              posts={day ? postsByDay?.[day] : undefined}
              isSelected={day === selectedDay}
              onClick={() => day && onSelectDay(day)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
