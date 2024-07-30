import Layout from "../../components/layout/layout";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout disableBackgroundEffect size="full">
      {children}
    </Layout>
  );
}
