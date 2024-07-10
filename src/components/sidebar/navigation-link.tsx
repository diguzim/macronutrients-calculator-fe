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
        flex flex-row items-center gap-1 p-2.5 font-semibold text-sm text-secondary-contrast border-b-2
      `}
    >
      {children}
    </Link>
  );
}
