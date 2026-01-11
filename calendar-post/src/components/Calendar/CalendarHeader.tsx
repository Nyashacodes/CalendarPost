export default function CalendarHeader() {
  return (
    <div className="flex items-center justify-between mb-4">
      <button className="w-8 h-8 flex items-center justify-center rounded bg-gray-800 hover:bg-gray-700">
        ‹
      </button>

      <h2 className="text-lg font-semibold">January 2026</h2>

      <button className="w-8 h-8 flex items-center justify-center rounded bg-gray-800 hover:bg-gray-700">
        ›
      </button>
    </div>
  );
}
