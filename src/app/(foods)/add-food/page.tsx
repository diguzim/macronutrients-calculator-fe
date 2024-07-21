import Header from "../../../components/header/header";
import NewItemForm from "./new-item-form";

export default function Page() {
  return (
    <div className="flex flex-col gap-2">
      <header>
        <Header size={1}>Add Item</Header>
      </header>
      <NewItemForm />
    </div>
  );
}
