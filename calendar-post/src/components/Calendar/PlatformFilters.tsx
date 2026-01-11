import type { Platform } from "../../data/calendarPosts";

interface Props {
  activePlatforms: Platform[];
  onToggle: (platform: Platform) => void;
}

const PLATFORMS: Platform[] = ["instagram", "linkedin", "facebook"];

export default function PlatformFilters({
  activePlatforms,
  onToggle,
}: Props) {
  return (
    <div className="flex gap-3 mb-6">
      {PLATFORMS.map((platform) => {
        const isActive = activePlatforms.includes(platform);

        return (
          <button
            key={platform}
            onClick={() => onToggle(platform)}
            className={`px-4 py-1 rounded-full text-sm capitalize transition
              ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
          >
            {platform}
          </button>
        );
      })}
    </div>
  );
}
