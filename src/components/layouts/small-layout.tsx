export default function SmallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-w-[600px] p-6">{children}</div>;
}
