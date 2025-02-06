import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex flex-col items-center">
      <h1>WELCOME</h1>
      <h2>blabablan</h2>
      <Link href={"/quiz"}>
        <button>get started</button>
      </Link>
    </div>
  );
}
