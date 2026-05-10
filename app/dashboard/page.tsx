"use client";

import { useState } from "react";

export default function DashboardPage() {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");
  const [budget, setBudget] = useState("");
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState("");

  const generatePlan = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          destination,
          days,
          budget,
        }),
      });

      const data = await res.json();

      if (data.plan) {
        setPlan(data.plan);
      } else {
        setPlan(data.error || "Failed to generate plan");
      }
    } catch (error) {
      setPlan("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center p-10">
      <h1 className="text-6xl font-bold text-blue-500 mb-4">
        Traveloop AI
      </h1>

      <p className="text-gray-400 text-xl mb-10">
        Generate smart AI travel plans
      </p>

      <div className="bg-zinc-900 p-10 rounded-3xl w-full max-w-3xl">
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full p-5 mb-6 rounded-2xl bg-zinc-800 text-white outline-none"
        />

        <input
          type="number"
          placeholder="Days"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          className="w-full p-5 mb-6 rounded-2xl bg-zinc-800 text-white outline-none"
        />

        <input
          type="number"
          placeholder="Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="w-full p-5 mb-6 rounded-2xl bg-zinc-800 text-white outline-none"
        />

        <button
          onClick={generatePlan}
          className="w-full bg-blue-600 hover:bg-blue-700 transition-all p-5 rounded-2xl text-2xl font-bold"
        >
          {loading ? "Generating..." : "Generate AI Itinerary"}
        </button>

        <div className="flex gap-4 mt-6 flex-wrap">
          <a
            href="/my-trips"
            className="bg-purple-600 px-6 py-3 rounded-xl font-bold"
          >
            My Trips
          </a>

          <a
            href="/packing"
            className="bg-green-600 px-6 py-3 rounded-xl font-bold"
          >
            Packing
          </a>

          <a
            href="/budget"
            className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold"
          >
            Budget
          </a>

          <a
            href="/profile"
            className="bg-pink-600 px-6 py-3 rounded-xl font-bold"
          >
            Profile
          </a>
        </div>
      </div>

      {plan && (
        <div className="bg-zinc-900 mt-10 p-10 rounded-3xl w-full max-w-3xl whitespace-pre-wrap">
          {plan}
        </div>
      )}
    </main>
  );
}