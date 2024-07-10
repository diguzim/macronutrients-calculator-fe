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
        flex flex-row items-center gap-1 bg-white p-2.5 rounded font-semibold text-sm
        ${active ? "bg-primary text-primary" : ""}
      `}
    >
      {children}
    </Link>
  );
}
