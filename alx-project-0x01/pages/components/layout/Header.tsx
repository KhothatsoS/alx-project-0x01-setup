import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-gray-900 text-white py-4">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <h1 className="font-bold text-xl">My App</h1>

        <ul className="flex gap-6">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/posts">Posts</Link></li>
          <li><Link href="/users">Users</Link></li>
        </ul>
      </nav>
    </header>
  );
}
