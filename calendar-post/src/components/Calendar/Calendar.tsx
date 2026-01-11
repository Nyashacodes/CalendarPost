import { useEffect, useState } from "react";
import CalendarHeader from "./CalendarHeader";
import Loader from "../UI/Loader";
// import PlatformFilters from "./PlatformFilters";
import CalendarGrid from "./CalendarGrid";
import CalendarTopBar from "./CalendarTopBar";
import {
  getDaysInMonth,
  getStartDayOfMonth,
  formatDateKey,
} from "../../utils/dateUtils";
import type { Platform } from "../../data/calendarPosts";
import { calendarPosts } from "../../data/calendarPosts";

export default function Calendar() {
  const [year, setYear] = useState(2025);
  const [month, setMonth] = useState(11); // December (0-based)

  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [postCounts, setPostCounts] = useState<Record<number, number>>({});
  const [postsByDay, setPostsByDay] = useState<Record<number, import("../../data/calendarPosts").Post[]>>({});

  const [activePlatforms, setActivePlatforms] = useState<Platform[]>([
    "instagram",
    "linkedin",
    "facebook",
  ]);


  const totalDays = getDaysInMonth(year, month);
  const startDay = getStartDayOfMonth(year, month);



  const days: (number | null)[] = [
    ...Array(startDay).fill(null),
    ...Array.from({ length: totalDays }, (_, i) => i + 1),
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

    const timer = setTimeout(() => {
      const counts: Record<number, number> = {};
      const postsMap: Record<number, import("../../data/calendarPosts").Post[]> = {};

      for (let d = 1; d <= totalDays; d++) {
        const key = formatDateKey(year, month, d);

        const postsForDay = calendarPosts[key] ?? [];

        const filteredPosts = postsForDay.filter((post) =>
          activePlatforms.includes(post.platform)
        );

        counts[d] = filteredPosts.length;
        postsMap[d] = filteredPosts;
      }

      setPostCounts(counts);
      setPostsByDay(postsMap);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [year, month, totalDays, activePlatforms]);

  const goToPrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear((y) => y - 1);
    } else {
      setMonth((m) => m - 1);
    }
  };

  const goToNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear((y) => y + 1);
    } else {
      setMonth((m) => m + 1);
    }
  };

  const togglePlatform = (platform: Platform) => {
    setActivePlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    );
  };


  return (
    <div className="bg-gray-950 rounded-xl w-full max-w-full mx-auto p-6 ">
      <CalendarTopBar
        activePlatforms={activePlatforms}
        onTogglePlatform={togglePlatform}
      />

      <CalendarHeader
        monthLabel={monthLabel}
        onPrev={goToPrevMonth}
        onNext={goToNextMonth}
      />

      {/* <PlatformFilters
  activePlatforms={activePlatforms}
  onToggle={togglePlatform}
/> */}


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
