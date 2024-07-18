import Header from "../../../components/header/header";
import NewCompositeItemForm from "./new-composite-item.form";

export default function Page() {
  return (
    <div className="flex flex-col gap-2">
      <header>
        <Header size={1} text="Create Recipe" />
      </header>
      <NewCompositeItemForm />
    </div>
  );
}
