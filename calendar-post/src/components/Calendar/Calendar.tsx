import CalendarHeader from "./CalendarHeader";
import PlatformFilters from "./PlatformFilters";
import CalendarGrid from "./CalendarGrid";

export default function Calendar() {
  return (
    <div className="bg-gray-950 rounded-xl p-6 max-w-5xl mx-auto">
      <CalendarHeader />
      <PlatformFilters />
      <CalendarGrid />
    </div>
  );
}
