import Link from "next/link";

export default function Home() {
  return (
    <div className="pageContainer">
      <nav>
        <p>
          <Link href="/">Home</Link>
        </p>
        <p>
          <Link href="/">Tours</Link>
        </p>
        <p>
          <Link href="/">Gallery</Link>
        </p>
        <p>
          <Link href="/">About Us</Link>
        </p>
        <p>
          <Link href="/">Contact Us</Link>
        </p>
      </nav>
      <main>
        <h1>test</h1>
      </main>
    </div>
  );
}
