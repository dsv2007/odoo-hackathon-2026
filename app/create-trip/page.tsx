export default function CreateTrip() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        Create New Trip
      </h1>

      <div className="bg-zinc-900 p-10 rounded-3xl max-w-3xl">
        <input
          placeholder="Trip Name"
          className="w-full p-5 mb-6 rounded-xl bg-zinc-800"
        />

        <input
          type="date"
          className="w-full p-5 mb-6 rounded-xl bg-zinc-800"
        />

        <input
          type="date"
          className="w-full p-5 mb-6 rounded-xl bg-zinc-800"
        />

        <textarea
          placeholder="Trip Description"
          className="w-full p-5 mb-6 rounded-xl bg-zinc-800"
        />

        <button className="bg-blue-600 px-8 py-4 rounded-xl">
          Save Trip
        </button>
      </div>
    </div>
  );
}