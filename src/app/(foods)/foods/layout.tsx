import Layout from "../../../components/layout/layout";

export default function FoodsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
