import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useMemo } from "react";

import { useTranslation } from "react-i18next";
import { Food } from "../../common/interfaces/item.interface";
import TableBodyCell from "../table/table-body-cell";
import TableHeadCell from "../table/table-head-cell";
import TableHeadRow from "../table/table-head-row";

const PORTION = 100;

type FoodsTableProps = {
  foods: Food[];
  onFoodClick: (foodId: string) => void;
};

export default function FoodsTable({ foods, onFoodClick }: FoodsTableProps) {
  const { t } = useTranslation();

  const foodsWithNutritionalValues = useMemo(() => {
    return foods.map((food) => ({
      id: food.id,
      name: food.name,
      type: food.type,
      kcal: (food.kcalPerGram * PORTION).toFixed(0),
      carbohydrate: (food.carbohydrateRatio * PORTION).toFixed(1),
      protein: (food.proteinRatio * PORTION).toFixed(1),
      fat: (food.fatRatio * PORTION).toFixed(1),
      fiber: (food.fiberRatio * PORTION).toFixed(1),
    }));
  }, [foods]);

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="foods table">
        <caption>{t("foodsTable.portionCaption")}</caption>
        <TableHead>
          <TableHeadRow>
            <TableHeadCell>{t("general.name")}</TableHeadCell>
            <TableHeadCell>{t("general.type")}</TableHeadCell>
            <TableHeadCell>{t("nutrients.caloriesLabel")}</TableHeadCell>
            <TableHeadCell>{t("nutrients.carbohydratesLabel")}</TableHeadCell>
            <TableHeadCell>{t("nutrients.proteinLabel")}</TableHeadCell>
            <TableHeadCell>{t("nutrients.totalFatLabel")}</TableHeadCell>
            <TableHeadCell>{t("nutrients.fiberLabel")}</TableHeadCell>
          </TableHeadRow>
        </TableHead>
        <TableBody>
          {foodsWithNutritionalValues.map((food) => (
            <TableRow
              key={food.id}
              onClick={() => onFoodClick(food.id)}
              className="cursor-pointer hover:bg-gray"
            >
              <TableBodyCell>{food.name}</TableBodyCell>
              <TableBodyCell>{food.type}</TableBodyCell>
              <TableBodyCell>{food.kcal} kcal</TableBodyCell>
              <TableBodyCell>{food.carbohydrate}g</TableBodyCell>
              <TableBodyCell>{food.protein}g</TableBodyCell>
              <TableBodyCell>{food.fat}g</TableBodyCell>
              <TableBodyCell>{food.fiber}g</TableBodyCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
