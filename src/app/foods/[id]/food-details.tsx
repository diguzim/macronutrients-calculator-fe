import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useMemo } from "react";

import { Item } from "../../../common/interfaces/item.interface";
import theme from "../../../theme/theme";

type FoodDetailsProps = {
  food: Item;
  portion: number;
};

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

export default function FoodDetails({ food, portion }: FoodDetailsProps) {
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
        <Table size="small" aria-label="simple table">
          <TableHead>
            <TableRow className="bg-secondary">
              <TableHeadCell>Nutrient</TableHeadCell>
              <TableHeadCell>Amount</TableHeadCell>
              <TableHeadCell>Daily Value</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>{itemDetails.name}</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Calories</TableCell>
              <TableCell>{itemDetails.kcal} kcal</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Carbohydrates</TableCell>
              <TableCell>{itemDetails.carbohydrate} g</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Protein</TableCell>
              <TableCell>{itemDetails.protein} g</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Fat</TableCell>
              <TableCell>{itemDetails.fat} g</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Fiber</TableCell>
              <TableCell>{itemDetails.fiber} g</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
