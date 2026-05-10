export default function PackingPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold text-green-500 mb-8">
        Packing Checklist
      </h1>

      <div className="bg-zinc-900 p-8 rounded-3xl space-y-4 text-xl">
        <p>✅ Clothes</p>
        <p>✅ Passport / ID</p>
        <p>✅ Charger</p>
        <p>✅ Power Bank</p>
        <p>✅ Shoes</p>
        <p>✅ Medicines</p>
      </div>
    </main>
  );
}