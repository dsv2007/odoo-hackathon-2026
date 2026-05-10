export default function CitySearch() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        City Search
      </h1>

      <input
        placeholder="Search City"
        className="w-full p-5 rounded-xl bg-zinc-800"
      />

      <div className="mt-10 bg-zinc-900 p-6 rounded-3xl">
        <h2 className="text-3xl font-bold">
          Paris
        </h2>

        <button className="mt-5 bg-blue-600 px-5 py-3 rounded-xl">
          Add To Trip
        </button>
      </div>
    </div>
  );
}