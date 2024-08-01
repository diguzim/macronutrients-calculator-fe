"use client";

import Button from "../../../components/button/button";
import { ROUTES } from "../../../utils/constants/routes";
import withAuth from "../../../utils/hocs/with-auth";
import CustomFoodSearch from "./_components/custom-food-search";

function CustomFoodsPage() {
  return (
    <div className="flex flex-col items-center gap-4">
      <CustomFoodSearch />
      <Button href={ROUTES.CREATE_FOOD} className="self-start">
        Create food
      </Button>
    </div>
  );
}

export default withAuth(CustomFoodsPage);
