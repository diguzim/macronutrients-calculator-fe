"use client";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import { useMemo, useState } from "react";
import { Item } from "../../../common/interfaces/item.interface";
import { environmentVariables } from "../../../utils/environment-variables";
import { createSuspenseResource } from "../../../utils/suspense/createSuspenseResource";

const URL = `${environmentVariables().public.backendUrl}/items`;

// const fetchItems = async () => {
//   const response = await fetch(URL, {
//     next: {
//       tags: ["items"],
//     },
//   });

//   if (response.ok) {
//     return (await response.json()) as any[];
//   } else {
//     throw new Error("Failed to fetch items");
//   }
// };

const itemsResource = createSuspenseResource<Item[]>(() =>
  fetch(URL, {
    next: {
      tags: ["items"],
    },
  }).then((response) => response.json())
);

export default function ItemsTable() {
  const [portion, setPortion] = useState(100);
  const items = itemsResource.read();

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
            <TableRow className="bg-gray-200">
              <TableCell sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                Name
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                Type
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                Kcal
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                Carbohydrates
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                Protein
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                Fat
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                Fiber
              </TableCell>
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
