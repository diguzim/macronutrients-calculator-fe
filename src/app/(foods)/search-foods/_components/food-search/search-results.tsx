"use client";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Link from "next/link";
import { useMemo } from "react";
import { Item } from "../../../../../common/interfaces/item.interface";
import theme from "../../../../../theme/theme";
import { environmentVariables } from "../../../../../utils/environment-variables";

const URL = `${environmentVariables().public.backendUrl}/items`;

type SearchResultsProps = {
  items: Item[];
};

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

export default function SearchResults({ items }: SearchResultsProps) {
  const itemsWithNutritionalValues = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      name: item.name,
      type: item.type,
      kcal: (item.kcalPerGram * PORTION).toFixed(0),
      carbohydrate: (item.carbohydrateRatio * PORTION).toFixed(1),
      protein: (item.proteinRatio * PORTION).toFixed(1),
      fat: (item.fatRatio * PORTION).toFixed(1),
      fiber: (item.fiberRatio * PORTION).toFixed(1),
    }));
  }, [items]);

  if (items.length === 0) {
    return <p className="text-2xl">No results found</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="ml-2">
        <span className="font-bold">{items.length}</span> results found
      </p>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="simple table">
          <TableHead>
            <TableRow className="bg-secondary">
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Type</TableHeadCell>
              <TableHeadCell>Kcal</TableHeadCell>
              <TableHeadCell>Carbohydrates</TableHeadCell>
              <TableHeadCell>Protein</TableHeadCell>
              <TableHeadCell>Fat</TableHeadCell>
              <TableHeadCell>Fiber</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {itemsWithNutritionalValues.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Link
                    className="text-primary-dark font-bold"
                    href={`/food-details/${item.id}`}
                  >
                    {item.name}
                  </Link>
                </TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell>{item.kcal}g</TableCell>
                <TableCell>{item.carbohydrate}g</TableCell>
                <TableCell>{item.protein}g</TableCell>
                <TableCell>{item.fat}g</TableCell>
                <TableCell>{item.fiber}g</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <p className="text-sm text-gray-600 ml-2">
        * Values based on 100g portion
      </p>
    </div>
  );
}
