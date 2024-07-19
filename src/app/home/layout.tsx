export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-w-[1000px] max-w-[1100px]">{children}</div>;
}
