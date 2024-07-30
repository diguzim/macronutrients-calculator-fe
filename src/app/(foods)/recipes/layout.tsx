import Layout from "../../../components/layouts/layout";

export default function RecipesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout size="lg">{children}</Layout>;
}
