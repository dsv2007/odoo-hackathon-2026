export default function ActivitySearch() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        Activity Search
      </h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-zinc-900 p-6 rounded-3xl">
          <h2 className="text-3xl font-bold">
            Food Tour
          </h2>

          <p className="text-zinc-400 mt-3">
            Explore local cuisine.
          </p>
        </div>
      </div>
    </div>
  );
}