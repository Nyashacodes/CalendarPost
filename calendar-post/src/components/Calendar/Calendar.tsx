import { useEffect, useState } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import CalendarTopBar from "./CalendarTopBar";
import Loader from "../UI/Loader";
import {
  getDaysInMonth,
  getStartDayOfMonth,
  formatDateKey,
} from "../../utils/dateUtils";
import type { Platform } from "../../data/calendarPosts";
import { calendarPosts } from "../../data/calendarPosts";

export default function Calendar() {
  const [year, setYear] = useState(2026);
  const [month, setMonth] = useState(0); // January

  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [postCounts, setPostCounts] = useState<Record<number, number>>({});
  const [postsByDay, setPostsByDay] = useState<Record<number, any[]>>({});

  const [activePlatforms, setActivePlatforms] = useState<Platform[]>([
    "instagram",
    "linkedin",
    "facebook",
  ]);

  const totalDays = getDaysInMonth(year, month);
  const startDay = getStartDayOfMonth(year, month);

  const prevMonth = month === 0 ? 11 : month - 1;
  const prevYear = month === 0 ? year - 1 : year;
  const daysInPrevMonth = getDaysInMonth(prevYear, prevMonth);

  const prevMonthDays = Array.from(
    { length: startDay },
    (_, i) => daysInPrevMonth - startDay + i + 1
  );

  // Create an array for the days of the current month
  const currentMonthDays = Array.from(
    { length: totalDays },
    (_, i) => i + 1
  );

  const totalCells = 42;
  const nextMonthDaysCount =
    totalCells - (prevMonthDays.length + currentMonthDays.length);

  const nextMonthDays = Array.from(
    { length: nextMonthDaysCount },
    (_, i) => i + 1
  );

  const days = [
    ...prevMonthDays.map((day) => ({ day, type: "prev" as const })),
    ...currentMonthDays.map((day) => ({ day, type: "current" as const })),
    ...nextMonthDays.map((day) => ({ day, type: "next" as const })),
  ];

  const monthLabel = new Date(year, month).toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  useEffect(() => {
    setSelectedDay(null);
  }, [month, year]);

  useEffect(() => {
    setLoading(true);

    // Simulate asynchronous data fetching
    const timer = setTimeout(() => {
      const counts: Record<number, number> = {};
      const postsMap: Record<number, any[]> = {};

      for (let d = 1; d <= totalDays; d++) {
        const key = formatDateKey(year, month, d);
        const postsForDay = calendarPosts[key] ?? [];

        const filtered = postsForDay.filter((post) =>
          activePlatforms.includes(post.platform)
        );

        counts[d] = filtered.length;
        postsMap[d] = filtered;
      }

      setPostCounts(counts);
      setPostsByDay(postsMap);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [year, month, totalDays, activePlatforms]);

  const goToPrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear((y) => y - 1);
    } else setMonth((m) => m - 1);
  };

  const goToNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear((y) => y + 1);
    } else setMonth((m) => m + 1);
  };

  const togglePlatform = (platform: Platform) => {
    setActivePlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    );
  };

  return (
    <div className="bg-gray-950 rounded-xl p-6">
      <CalendarTopBar
        activePlatforms={activePlatforms}
        onTogglePlatform={togglePlatform}
      />

      <CalendarHeader
        monthLabel={monthLabel}
        onPrev={goToPrevMonth}
        onNext={goToNextMonth}
      />

      {loading ? (
        <Loader />
      ) : (
        <CalendarGrid
          days={days}
          selectedDay={selectedDay}
          onSelectDay={setSelectedDay}
          postCounts={postCounts}
          postsByDay={postsByDay}
        />
      )}
    </div>
  );
}
