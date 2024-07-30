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
      color: theme.colors.secondary.contrast,
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
          <TableRow className="bg-secondary">
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
              <TableCell>
                <Link
                  className="text-primary-dark font-bold"
                  href={`/food-details/${food.id}`}
                >
                  {food.name}
                </Link>
              </TableCell>
              <TableCell>{food.type}</TableCell>
              <TableCell>{food.kcal} kcal</TableCell>
              <TableCell>{food.carbohydrate}g</TableCell>
              <TableCell>{food.protein}g</TableCell>
              <TableCell>{food.fat}g</TableCell>
              <TableCell>{food.fiber}g</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}