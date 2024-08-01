import Layout from "../../../components/layout/layout";

export default function FoodsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout
      size="md"
      title="Food Search"
      description="Search for a food to see it's nutritional data"
    >
      {children}
    </Layout>
  );
}
