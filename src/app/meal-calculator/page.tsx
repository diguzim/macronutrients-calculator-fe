import Header from "../../components/header/header";
import CalculateNutritionalValuesForm from "./calculate-nutritional-values.form";

export default function Page() {
  return (
    <div className="flex flex-col gap-2">
      <header>
        <Header size={1}>Meal Calculator</Header>
        <p>Add each portion that composes you meal and figure out what</p>
        <p>the nutritional values of the meal are.</p>
      </header>
      <CalculateNutritionalValuesForm />
    </div>
  );
}
