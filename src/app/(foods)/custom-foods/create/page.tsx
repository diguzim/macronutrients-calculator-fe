"use client";

import PageTitle from "../../../../components/page-title/page-title";
import withAuth from "../../../../utils/hocs/with-auth";
import CreateForm from "./create-form";

function CreateCustomFoodPage() {
  return (
    <div className="flex flex-col gap-10">
      <PageTitle title="Create a Food" />
      <CreateForm />
    </div>
  );
}

export default withAuth(CreateCustomFoodPage);
