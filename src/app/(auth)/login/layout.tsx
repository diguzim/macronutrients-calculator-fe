import SmallLayout from "../../../components/layouts/small-layout";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SmallLayout>{children}</SmallLayout>;
}
