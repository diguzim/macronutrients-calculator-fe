"use client";

import withAuth from "../../../utils/hocs/with-auth";
import CreateForm from "./create-form";

function CreateFoodPage() {
  return <CreateForm />;
}

export default withAuth(CreateFoodPage);
