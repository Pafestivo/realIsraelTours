import Link from "next/link";

export default function Home() {
  return (
    <div className="pageContainer">
      <nav>
        <p>
          <Link href="/">Home</Link>
        </p>
      </nav>
      <main>
        <h1>test</h1>
      </main>
    </div>
  );
}
