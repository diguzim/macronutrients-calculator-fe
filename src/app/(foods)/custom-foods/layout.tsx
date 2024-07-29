import MediumLayout from "../../../components/layouts/medium-layout";

export default function RecipesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MediumLayout>{children}</MediumLayout>;
}
