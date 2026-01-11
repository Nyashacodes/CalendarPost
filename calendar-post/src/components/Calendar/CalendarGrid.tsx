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
    <div className="relative mt-4">
      {/* Top gradient border */}
      <div
        className="absolute top-0 left-0 w-full h-px
                 bg-gradient-to-r
                 from-transparent
                 via-gray-700
                 to-transparent"
      />

      <div className="pt-4">
        {/* Weekdays */}
        <div className="grid grid-cols-7 text-xs text-gray-400 px-4 py-3">
          {WEEKDAYS.map((d) => (
            <div key={d} className="text-center">
              {d}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 auto-rows-[14rem]">
          {days.map((day, i) => (
            <div key={i} className="border border-gray-800">
              <CalendarDayCell
                day={day ?? undefined}
                count={day ? postCounts[day] ?? undefined : undefined}
                posts={day ? postsByDay?.[day] : undefined}
                isSelected={day === selectedDay}
                onClick={() => day && onSelectDay(day)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );


}
