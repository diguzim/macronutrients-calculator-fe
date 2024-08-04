"use client";

import { useTranslation } from "react-i18next";
import Button from "../../../components/button/button";
import { ROUTES } from "../../../utils/constants/routes";
import withAuth from "../../../utils/hocs/with-auth";
import FavoriteFoodsSearch from "./_components/favorite-foods-search";

function FavoriteFoodsPage() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center gap-4">
      <FavoriteFoodsSearch />
      <Button href={ROUTES.CREATE_FOOD} className="self-start">
        {t("favoriteFoods.createFoodCTA")}
      </Button>
    </div>
  );
}

export default withAuth(FavoriteFoodsPage);
