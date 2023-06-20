import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-full md:w-64 w-32 bg-gray-800 text-white p-2 md:p-4">
      <nav>
        <ul className="space-y-10 text-2xl py-2 px-4 pt-44 font-semibold">
          <li>
            <Link href="/" className="block text-white hover:bg-gray-700">
              Item 1
            </Link>
          </li>
          <li>
            <Link href="/" className="block text-white hover:bg-gray-700">
              Item 1
            </Link>
          </li>
          <li>
            <Link href="/" className="block text-white hover:bg-gray-700">
              Item 1
            </Link>
          </li>
          <li>
            <Link href="/" className="block text-white hover:bg-gray-700">
              Item 1
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
