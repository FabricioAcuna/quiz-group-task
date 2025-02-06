import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500">
      <h1 className="text-9xl font-extrabold text-white mb-6">WELCOME</h1>
      <h2 className="text-xl text-white mb-12">blabablabla</h2>
      <Link href="/quiz">
        <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-900 rounded-lg  hover:bg-blue-950">
          Get Started
        </button>
      </Link>
    </div>
  );
}
