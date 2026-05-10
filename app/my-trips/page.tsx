export default function MyTrips() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        My Trips
      </h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-zinc-900 p-6 rounded-3xl">
          <h2 className="text-3xl font-bold">
            Goa Vacation
          </h2>

          <p className="text-zinc-400 mt-3">
            5 Days Trip
          </p>

          <a
  href="/itinerary-view"
  className="bg-blue-600 px-6 py-3 rounded-xl font-bold inline-block mt-4"
>
  View Trip
</a>
        </div>
      </div>
    </div>
  );
}