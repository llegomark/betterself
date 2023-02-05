import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="mt-5 flex w-full items-center justify-between border-b-2 px-2 pb-7 sm:px-4">
      <Link href="/" className="flex w-full justify-center sm:justify-start">
        <Image
          alt="betterself logo"
          src="/betterself.svg"
          className="h-10 w-10 object-cover"
          width={36}
          height={36}
        />
        <h1 className="ml-2 text-3xl font-bold tracking-tight sm:text-5xl">
          betterself.app
        </h1>
      </Link>
    </header>
  );
}
