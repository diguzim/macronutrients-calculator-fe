import Layout from "../../../components/layout/layout";

export default function FavoriteFoodsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout size="md" title="Favorite Foods">
      {children}
    </Layout>
  );
}
