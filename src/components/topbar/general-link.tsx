import Link from "next/link";

export default function GeneralLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      passHref
      className="text-primary-dark font-bold border-b-2 border-transparent hover:border-primary-dark transition duration-300 mt-1"
    >
      {children}
    </Link>
  );
}
