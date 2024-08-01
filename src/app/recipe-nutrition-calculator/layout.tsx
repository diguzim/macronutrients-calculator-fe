import Layout from "../../components/layout/layout";

export default function RecipeNutritionaCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout
      size="md"
      title="Recipe Nutrition Calculator"
      description="Add each portion that composes you meal and figure out what the nutritional values of the meal are."
    >
      {children}
    </Layout>
  );
}
