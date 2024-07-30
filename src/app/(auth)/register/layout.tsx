import Layout from "../../../components/layout/layout";

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout size="sm">{children}</Layout>;
}
