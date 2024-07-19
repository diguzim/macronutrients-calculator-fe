export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="max-w-6xl">{children}</div>;
}
