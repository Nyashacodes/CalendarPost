import type { Platform } from "../../data/calendarPosts";
import PlatformFilters from "./PlatformFilters";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';


interface Props {
  activePlatforms: Platform[];
  onTogglePlatform: (platform: Platform) => void;
}

export default function CalendarTopBar({
  activePlatforms,
  onTogglePlatform,
}: Props) {
  return (
    <div className="relative flex items-center mb-0">
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-xl font-medium">
                        <CalendarIcon className="text-[#3b82f6] w-6 h-6" />
                        <span>Calendar</span>
                    </div>

      <div className="ml-auto">
        <PlatformFilters
          activePlatforms={activePlatforms}
          onToggle={onTogglePlatform}
        />
      </div>
    </div>
  );
}
