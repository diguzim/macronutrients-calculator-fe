import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Link from "next/link";
import { useMemo } from "react";

import { Food } from "../../common/interfaces/item.interface";
import theme from "../../theme/theme";

const PORTION = 100;

const TableHeadCell = ({ children }: { children: React.ReactNode }) => (
  <TableCell
    sx={{
      fontWeight: "bold",
      fontSize: "1rem",
      color: theme.colors.primary.contrast,
    }}
  >
    {children}
  </TableCell>
);

const TableBodyCell = ({ children }: { children: React.ReactNode }) => (
  <TableCell
    sx={{
      fontSize: "1rem",
      color: theme.colors.primary.contrast,
    }}
  >
    {children}
  </TableCell>
);

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
          <TableRow className="bg-primary">
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Type</TableHeadCell>
            <TableHeadCell>Calories</TableHeadCell>
            <TableHeadCell>Carbohydrates</TableHeadCell>
            <TableHeadCell>Protein</TableHeadCell>
            <TableHeadCell>Fat</TableHeadCell>
            <TableHeadCell>Fiber</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {foodsWithNutritionalValues.map((food) => (
            <TableRow key={food.id}>
              <TableBodyCell>
                <Link
                  className="text-primary-contrast font-bold"
                  href={`/food-details/${food.id}`}
                >
                  {food.name}
                </Link>
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
