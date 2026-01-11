interface Props {
  day?: number;
}

export default function CalendarDayCell({ day }: Props) {
  return (
    <div className="h-24 rounded-lg border border-gray-800 p-2 hover:bg-gray-800 cursor-pointer">
      <div className="text-sm font-medium">{day}</div>

      <span className="mt-2 inline-block text-xs bg-blue-600 px-2 py-0.5 rounded">
        +3
      </span>
    </div>
  );
}
