"use client";

import PageTitle from "../../../components/page-title/page-title";
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
    </div>
  );
}

export default withAuth(CustomFoodsPage);
