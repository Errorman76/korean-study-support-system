import Link from "next/link";

export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/" className="text-3xl font-bold">
            Home
          </Link>
          <Link href="/analysis-project" className="text-3xl font-bold">
            Analysis Project
          </Link>
          <Link href="/" className="text-3xl font-bold">
            Etc...
          </Link>
        </li>
      </ul>
    </div >
  );
}
