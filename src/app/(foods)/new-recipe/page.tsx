import PageTitle from "../../../components/page-title/page-title";
import NewCompositeItemForm from "./new-composite-item.form";

export default function Page() {
  return (
    <div className="flex flex-col gap-2">
      <PageTitle title="Create Recipe" />
      <NewCompositeItemForm />
    </div>
  );
}
