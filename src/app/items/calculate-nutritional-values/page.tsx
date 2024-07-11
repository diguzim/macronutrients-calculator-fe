import Header from "../../../components/header/header";
import CalculateNutritionalValuesForm from "./calculate-nutritional-values.form";

export default function Page() {
  return (
    <div className="flex flex-col gap-2">
      <header>
        <Header size={1} text="Calculate nutritional values" />
      </header>
      <CalculateNutritionalValuesForm />
    </div>
  );
}
