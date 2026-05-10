import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-6 text-blue-500">
        Traveloop AI
      </h1>

      <p className="text-xl text-gray-300 mb-10">
        Smart AI Powered Travel Planner
      </p>

      <div className="flex gap-6">
        <Link
          href="/signup"
          className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-2xl text-xl font-bold"
        >
          Sign Up
        </Link>

        <Link
          href="/login"
          className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-2xl text-xl font-bold"
        >
          Login
        </Link>
      </div>
    </main>
  );
}