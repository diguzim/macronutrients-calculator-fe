"use client";

import Button from "../../../components/button/button";
import Layout from "../../../components/layout/layout";
import PageTitle from "../../../components/page-title/page-title";
import { ROUTES } from "../../../utils/constants/routes";
import withAuth from "../../../utils/hocs/with-auth";
import CustomFoodSearch from "./_components/custom-food-search";

function CustomFoodsPage() {
  return (
    <Layout size="md">
      <div className="flex flex-col gap-10">
        <PageTitle
          title="Custom Foods"
          description="Manage your own customized foods"
        />
        <CustomFoodSearch />
        <div>
          <Button href={ROUTES.CUSTOM_FOODS_CREATE}>Create custom food</Button>
        </div>
      </div>
    </Layout>
  );
}

export default withAuth(CustomFoodsPage);
