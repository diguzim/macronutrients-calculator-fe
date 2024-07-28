import MediumLayout from "../../../components/layouts/medium-layout";

export default function FoodsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MediumLayout>{children}</MediumLayout>;
}
