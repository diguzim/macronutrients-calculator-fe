import Layout from "../../../components/layout/layout";

export default function AddFoodLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout size="md" title="Create Recipe">
      {children}
    </Layout>
  );
}
