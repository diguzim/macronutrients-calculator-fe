import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useMemo } from "react";

import { Food } from "../../common/interfaces/item.interface";
import Link from "../link/link";
import TableBodyCell from "../table/table-body-cell";
import TableHeadCell from "../table/table-head-cell";
import TableHeadRow from "../table/table-head-row";

const PORTION = 100;

type FoodsTableProps = {
  foods: Food[];
};

export default function FoodsTable({ foods }: FoodsTableProps) {
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
        <caption>* Values based on 100g portion</caption>
        <TableHead>
          <TableHeadRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Type</TableHeadCell>
            <TableHeadCell>Calories</TableHeadCell>
            <TableHeadCell>Carbohydrates</TableHeadCell>
            <TableHeadCell>Protein</TableHeadCell>
            <TableHeadCell>Fat</TableHeadCell>
            <TableHeadCell>Fiber</TableHeadCell>
          </TableHeadRow>
        </TableHead>
        <TableBody>
          {foodsWithNutritionalValues.map((food) => (
            <TableRow key={food.id}>
              <TableBodyCell>
                <Link href={`/food-details/${food.id}`}>{food.name}</Link>
              </TableBodyCell>
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
