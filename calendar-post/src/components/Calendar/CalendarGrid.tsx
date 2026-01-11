import CalendarDayCell from "./CalendarDayCell";
import { WEEKDAYS } from "../../utils/dateUtils";

interface DayItem {
  day: number;
  type: "prev" | "current" | "next";
}

interface Props {
  days: DayItem[];
  selectedDay: number | null;
  onSelectDay: (day: number) => void;
  postCounts: Record<number, number>;
  postsByDay?: Record<number, any[]>;
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
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

      <div className="pt-4">
        <div className="grid grid-cols-7 text-xs text-gray-400 px-4 py-3">
          {WEEKDAYS.map((d) => (
            <div key={d} className="text-center">
              {d}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 auto-rows-[14rem]">
          {days.map(({ day, type }, i) => (
            <div key={i} className="border border-gray-800">
              <CalendarDayCell
                day={day}
                type={type}
                count={type === "current" ? postCounts[day] : undefined}
                posts={type === "current" ? postsByDay?.[day] : undefined}
                isSelected={type === "current" && day === selectedDay}
                onClick={
                  type === "current" ? () => onSelectDay(day) : undefined
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
