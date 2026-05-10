export default function ItineraryBuilder() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        Itinerary Builder
      </h1>

      <div className="space-y-6">
        <div className="bg-zinc-900 p-6 rounded-3xl">
          <h2 className="text-3xl font-bold">
            Day 1 - Chennai
          </h2>

          <p className="text-zinc-400 mt-3">
            Marina Beach • Food Tour • Shopping
          </p>
        </div>

        <button className="bg-blue-600 px-8 py-4 rounded-xl">
          Add Stop
        </button>
      </div>
    </div>
  );
}