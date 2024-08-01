import Layout from "../../../components/layout/layout";

export default function CustomFoodsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout size="md">{children}</Layout>;
}
