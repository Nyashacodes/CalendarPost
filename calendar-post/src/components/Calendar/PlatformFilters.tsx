export default function PlatformFilters() {
  return (
    <div className="flex gap-4 mb-6">
      {["Instagram", "LinkedIn", "Facebook"].map((platform) => (
        <button
          key={platform}
          className="px-4 py-1 rounded-full text-sm bg-gray-800 hover:bg-gray-700"
        >
          {platform}
        </button>
      ))}
    </div>
  );
}
