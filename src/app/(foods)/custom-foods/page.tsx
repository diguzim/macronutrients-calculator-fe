"use client";

import Button from "../../../components/button/button";
import PageTitle from "../../../components/page-title/page-title";
import { ROUTES } from "../../../utils/constants/routes";
import withAuth from "../../../utils/hocs/with-auth";
import CustomFoodSearch from "./_components/custom-food-search";

function CustomFoodsPage() {
  return (
    <div className="flex flex-col gap-10">
      <PageTitle
        title="Custom Foods"
        description="Manage your own customized foods"
      />
      <CustomFoodSearch />
      <div>
        <Button href={ROUTES.CREATE_FOOD}>Create food</Button>
      </div>
    </div>
  );
}

export default withAuth(CustomFoodsPage);
