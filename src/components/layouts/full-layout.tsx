export default function FullLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
