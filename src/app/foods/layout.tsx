export default function FoodsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-w-[1000px]">{children}</div>;
}
