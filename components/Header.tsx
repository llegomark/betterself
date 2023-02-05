import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-4 px-4 border-b border-gray-300">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            alt="betterself logo"
            src="/betterself.svg"
            className="h-10 w-10 object-cover"
            width={36}
            height={36}
          />
          <h1 className="ml-2 text-2xl font-bold text-gray-900">
            betterself.app
          </h1>
        </Link>
      </div>
    </header>
  );
}
