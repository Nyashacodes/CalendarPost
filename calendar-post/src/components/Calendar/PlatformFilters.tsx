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
  const LABELS: Record<Platform, string> = {
    instagram: "Instagram",
    linkedin: "Linked In",
    facebook: "Facebook",
  };

  return (
    <div className="flex items-center gap-6 text-sm text-gray-400 select-none">
      {PLATFORMS.map((platform) => {
        const isActive = activePlatforms.includes(platform);

        return (
          <button
            key={platform}
            type="button"
            onClick={() => onToggle(platform)}
            aria-pressed={isActive}
            className={`flex items-center gap-2 transition-opacity focus:outline-none ${
              !isActive ? "opacity-50" : ""
            }`}
          >
            <span
              className={`w-8 h-4 rounded-full relative transition-colors ${
                isActive ? "bg-[#3b82f6]" : "bg-gray-600"
              }`}
            >
              <span
                className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all ${
                  isActive ? "right-0.5" : "left-0.5"
                }`}
              />
            </span>

            <span>{LABELS[platform]}</span>
          </button>
        );
      })}
    </div>
  );
}
