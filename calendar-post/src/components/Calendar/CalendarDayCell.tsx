import type { Post } from "../../data/calendarPosts";

interface Props {
  day: number;
  type: "prev" | "current" | "next";
  count?: number;
  posts?: Post[];
  isSelected?: boolean;
  onClick?: () => void;
}

export default function CalendarDayCell({
  day,
  type,
  count,
  posts,
  isSelected,
  onClick,
}: Props) {
  const firstPost = posts?.[0];
  const extraCount = posts ? Math.max(0, posts.length - 1) : 0;

  return (
    <div
      onClick={onClick}
      className={`relative w-full h-full p-3 overflow-hidden transition-colors
        ${type === "current" ? "cursor-pointer hover:bg-gray-800" : "bg-gray-900/40 text-gray-500"}
        ${isSelected ? "bg-blue-500/20 ring-2 ring-blue-500/40" : ""}
      `}
    >
      {/* Date */}
      <div className="absolute top-2 right-2 text-sm font-medium">
        {day}
      </div>

      {/* Extra count */}
      {extraCount > 0 && type === "current" && (
        <div className="absolute top-2 left-2 text-xs text-blue-400">
          +{extraCount}
        </div>
      )}

      {/* Content */}
      {firstPost && type === "current" && (
        <div className="mt-6 bg-gray-900 rounded overflow-hidden text-xs">
          <div className="p-3">
            <div className="line-clamp-2 text-gray-300">
              {firstPost.caption}
            </div>
            {firstPost.caption.length > 60 && (
              <span className="text-blue-400 block mt-1">more</span>
            )}
          </div>

          <div className="px-3 pb-3">
            <div className="h-20 rounded overflow-hidden bg-black/20">
              <img
                src={firstPost.image_url}
                alt="post"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
