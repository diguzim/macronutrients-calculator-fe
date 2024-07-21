import PageTitle from "../../../components/page-title/page-title";
import NewItemForm from "./new-item-form";

export default function Page() {
  return (
    <div className="flex flex-col gap-2">
      <PageTitle title="Add Item" />
      <NewItemForm />
    </div>
  );
}
