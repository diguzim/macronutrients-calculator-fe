import MediumLayout from "../../../components/layout/medium-layout";

export default function RecipesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MediumLayout>{children}</MediumLayout>;
}
