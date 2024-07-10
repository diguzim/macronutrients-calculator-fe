import Image from "next/image";
import Link from "next/link";
import NavigationLinks from "./navigation-links";

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-1 h-full w-80 bg-secondary">
      <Link href="/">
        <Image
          src="/logo-no-background.svg"
          alt="logo"
          width={200}
          height={200}
          className="my-12 mx-auto"
        />
      </Link>
      <NavigationLinks />
    </div>
  );
}
