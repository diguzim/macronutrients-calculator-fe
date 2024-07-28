import FullLayout from "../../components/layouts/full-layout";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FullLayout>{children}</FullLayout>;
}
