import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-b from-indigo-500 to-pink-500">
      <h1 className="text-5xl md:text-8xl font-extrabold text-blue-900 mb-6">Quiz Arena</h1>
      <h2 className="text-3xl text-white mb-12 font-semibold">
        Test your general knowledge with a quiz!
      </h2>
      <Link href="/quiz">
        <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-900 rounded-lg hover:bg-blue-950">
          Get Started
        </button>
      </Link>
    </div>
  );
}
