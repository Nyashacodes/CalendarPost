import type { Post } from "../../data/calendarPosts";

interface Props {
  day?: number;
  count?: number;
  posts?: Post[];
  isSelected?: boolean;
  onClick?: () => void;
}

export default function CalendarDayCell({
  day,
  count,
  posts,
  isSelected,
  onClick,
}: Props) {
  if (!day) return <div className="w-full h-full p-2" />;

  const firstPost = posts && posts.length > 0 ? posts[0] : undefined;
  const extraCount = posts ? Math.max(0, posts.length - 1) : typeof count === "number" && count > 0 ? count : 0;

  return (
    <div
      onClick={onClick}
      className={`relative box-border w-full h-full p-3 cursor-pointer overflow-hidden transition-colors duration-150 ${
        isSelected
          ? "bg-blue-500/20 ring-2 ring-blue-500/40 text-white shadow-md"
          : "hover:bg-gray-800"
      }`}
    >
      {/* Top-left extra count (plain text) */}
      {extraCount > 0 && (
        <div className="absolute top-2 left-2 z-10">
          <span className="text-xs font-medium text-[#3b82f6]">+{extraCount}</span>
        </div>
      )}

      {/* Top-right date */}
      <div className="absolute top-2 right-2 z-10">
        {isSelected ? (
          <div className="w-7 h-7 flex items-center justify-center text-sm font-medium rounded bg-blue-500 text-white">
            {day}
          </div>
        ) : (
          <div className="text-sm font-medium text-gray-300">{day}</div>
        )}
      </div>

      {/* Content (caption above image) */}
      {firstPost ? (
        <div className="mt-6 bg-gray-900 rounded overflow-hidden text-gray-300 text-sm h-auto flex flex-col">
          <div className="p-3">
            <div className="text-xs text-gray-300 line-clamp-2">
  {firstPost.caption}
</div>

{/* Fake "more" indicator */}
{firstPost.caption.length > 60 && (
  <span className="text-xs text-[#3b82f6] mt-1 block">more</span>
)}

          </div>

          <div className="px-3 pb-3">
            <div className="h-20 rounded-md overflow-hidden bg-black/20 p-1">
              <img src={firstPost.image_url} alt="post" className="w-full h-full object-cover rounded-md block" />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
