import Link from "next/link";

export default function NavigationLink({
  href,
  active,
  children,
}: Readonly<{
  href: string;
  active: boolean;
  children: React.ReactNode;
}>) {
  return (
    <Link
      href={href}
      className={`
        flex flex-row items-center gap-1 bg-gray-50 p-2.5 rounded font-semibold text-sm
        ${active ? "bg-blue-100 text-blue-600" : ""}
      `}
    >
      {children}
    </Link>
  );
}
