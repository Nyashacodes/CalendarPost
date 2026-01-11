interface Props {
  day?: number;
  count?: number;
  isSelected?: boolean;
  onClick?: () => void;
}

export default function CalendarDayCell({
  day,
  count,
  isSelected,
  onClick,
}: Props) {
  if (!day) return <div className="h-24 rounded-lg" />;

  return (
    <div
      onClick={onClick}
      className={`h-24 rounded-lg border p-2 cursor-pointer transition
        ${
          isSelected
            ? "border-blue-500 bg-blue-500/10"
            : "border-gray-800 hover:bg-gray-800"
        }`}
    >
      <div className="text-sm font-medium">{day}</div>

      {count && count > 0 && (
        <span className="mt-2 inline-block text-xs bg-blue-600 px-2 py-0.5 rounded">
          +{count}
        </span>
      )}
    </div>
  );
}
