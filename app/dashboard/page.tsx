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

const text = await res.text();

console.log(text);

let data;

try {
  data = JSON.parse(text);
} catch {
  setPlan(text);
  setLoading(false);
  return;
}
    if (data.plan) {
      setPlan(data.plan);
    } else {
      setPlan(data.error || "Failed to generate plan");
    }
  } catch (error) {
setPlan(error instanceof Error ? error.message : "Something went wrong");  } finally {
    setLoading(false);
  }
};
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-6xl font-bold mb-4">Traveloop AI</h1>

      <p className="text-2xl mb-10">
        Generate smart AI travel plans.
      </p>

      <div className="bg-zinc-900 p-10 rounded-3xl max-w-4xl">
        <input
          className="w-full p-6 mb-8 rounded-2xl bg-zinc-800 text-3xl"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />

        <input
          className="w-full p-6 mb-8 rounded-2xl bg-zinc-800 text-3xl"
          placeholder="Days"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />

        <input
          className="w-full p-6 mb-8 rounded-2xl bg-zinc-800 text-3xl"
          placeholder="Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />

        <button
          onClick={generatePlan}
          className="w-full bg-blue-600 hover:bg-blue-700 p-6 rounded-2xl text-3xl font-bold"
        >
          {loading ? "Generating..." : "Generate AI Itinerary"}
        </button>
      </div>

      {plan && (
        <div className="bg-zinc-900 mt-10 p-10 rounded-3xl whitespace-pre-wrap text-2xl">
          {plan}
        </div>
      )}
    </div>
  );
}