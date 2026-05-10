export default function BudgetPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold text-green-500 mb-8">
        Budget Planner
      </h1>

      <div className="bg-zinc-900 p-8 rounded-3xl space-y-4">
        <p>🏨 Hotel: ₹8000</p>
        <p>🍽 Food: ₹4000</p>
        <p>🚕 Transport: ₹3000</p>
        <p>🎯 Activities: ₹5000</p>

        <hr className="border-zinc-700" />

        <p className="text-2xl font-bold">
          Total: ₹20,000
        </p>
      </div>
    </main>
  );
}