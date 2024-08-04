import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useMemo } from "react";

import { useTranslation } from "react-i18next";
import { Food } from "../../../../common/interfaces/item.interface";
import TableHeadCell from "../../../../components/table/table-head-cell";
import TableHeadRow from "../../../../components/table/table-head-row";

type FoodDetailsProps = {
  food: Food;
  portion: number;
};

export default function FoodDetails({ food, portion }: FoodDetailsProps) {
  const { t } = useTranslation();

  const itemDetails = useMemo(
    () => ({
      id: food.id,
      name: food.name,
      kcal: (food.kcalPerGram * portion).toFixed(0),
      carbohydrate: (food.carbohydrateRatio * portion).toFixed(1),
      protein: (food.proteinRatio * portion).toFixed(1),
      fat: (food.fatRatio * portion).toFixed(1),
      fiber: (food.fiberRatio * portion).toFixed(1),
    }),
    [food, portion]
  );

  return (
    <div className="flex flex-col gap-10">
      <TableContainer component={Paper}>
        <Table size="small" aria-label={t("publicFoodDetails.tableAriaLabel")}>
          <TableHead>
            <TableHeadRow>
              <TableHeadCell>{t("general.nutrient")}</TableHeadCell>
              <TableHeadCell>{t("general.amount")}</TableHeadCell>
            </TableHeadRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{t("nutrients.caloriesLabel")}</TableCell>
              <TableCell>{itemDetails.kcal} kcal</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("nutrients.carbohydratesLabel")}</TableCell>
              <TableCell>{itemDetails.carbohydrate} g</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("nutrients.proteinLabel")}</TableCell>
              <TableCell>{itemDetails.protein} g</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("nutrients.totalFatLabel")}</TableCell>
              <TableCell>{itemDetails.fat} g</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("nutrients.fiberLabel")}</TableCell>
              <TableCell>{itemDetails.fiber} g</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
