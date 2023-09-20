import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="pageContainer">
      <nav></nav>

      <main>
        <h1>test</h1>
      </main>
    </div>
  );
}
