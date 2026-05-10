export default function Notes() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        Trip Notes
      </h1>

      <textarea
        placeholder="Write your travel notes..."
        className="w-full h-64 p-5 rounded-3xl bg-zinc-900"
      />
    </div>
  );
}