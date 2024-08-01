import Layout from "../../../components/layout/layout";

export default function CreateFoodLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout size="sm" title="Create a Food">
      {children}
    </Layout>
  );
}
