interface Props {
  monthLabel: string;
  onPrev: () => void;
  onNext: () => void;
}

export default function CalendarHeader({
  monthLabel,
  onPrev,
  onNext,
}: Props) {
  return (
    <div className="flex items-center justify-between mb-4">
      <button
        onClick={onPrev}
        className="w-8 h-8 flex items-center justify-center rounded bg-gray-800 hover:bg-gray-700"
      >
        ‹
      </button>

      <h2 className="text-lg font-semibold">{monthLabel}</h2>

      <button
        onClick={onNext}
        className="w-8 h-8 flex items-center justify-center rounded bg-gray-800 hover:bg-gray-700"
      >
        ›
      </button>
    </div>
  );
}
