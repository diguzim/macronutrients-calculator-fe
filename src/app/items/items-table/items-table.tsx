"use client";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";

import { useEffect, useMemo, useState } from "react";
import { environmentVariables } from "../../../utils/environment-variables";

const URL = `${environmentVariables().public.backendUrl}/items`;

const fetchItems = async () => {
  const response = await fetch(URL, {
    next: {
      tags: ["items"],
    },
  });

  if (response.ok) {
    return (await response.json()) as any[];
  } else {
    throw new Error("Failed to fetch items");
  }
};

export default function ItemsTable() {
  const [portion, setPortion] = useState(100);
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    fetchItems().then((items) => {
      setItems(items);
    });
  }, []);

  const itemsWithNutritionalValues = useMemo(() => {
    return items.map((item) => {
      const nutritionalValues = {
        kcal: (item.kcalPerGram * portion).toFixed(0),
        carbohydrate: (item.carbohydrateRatio * portion).toFixed(1),
        protein: (item.proteinRatio * portion).toFixed(1),
        fat: (item.fatRatio * portion).toFixed(1),
        fiber: (item.fiberRatio * portion).toFixed(1),
      };

      return {
        ...item,
        ...nutritionalValues,
      };
    });
  }, [items, portion]);

  return (
    <div className="flex flex-col gap-4">
      <TextField
        label="Portion (g)"
        type="number"
        value={portion}
        onChange={(event) => setPortion(Number(event.target.value))}
        className="w-32"
      />
      <TableContainer component={Paper}>
        <Table size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Kcal</TableCell>
              <TableCell>Carbohydrates</TableCell>
              <TableCell>Protein</TableCell>
              <TableCell>Fat</TableCell>
              <TableCell>Fiber</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {itemsWithNutritionalValues.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
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
    </div>
  );
}
