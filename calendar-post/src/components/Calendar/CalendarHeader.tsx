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
  <div className="relative mt-10 px-2">
    {/* Top gradient border */}
    <div
      className="absolute top-0 left-0 w-full h-px 
                 bg-gradient-to-r 
                 from-transparent 
                 via-gray-700 
                 to-transparent"
    />

    {/* Content */}
    <div className="flex items-center justify-start pt-4 pb-3">
      <div className="flex items-center gap-2 text-lg font-semibold">
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
    </div>
  </div>
);

}
