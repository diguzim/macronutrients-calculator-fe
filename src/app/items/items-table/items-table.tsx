import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

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

export default async function ItemsTable() {
  const items = await fetchItems();

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Kcal (100g)</TableCell>
            <TableCell>Carbohydrates</TableCell>
            <TableCell>Protein</TableCell>
            <TableCell>Fat</TableCell>
            <TableCell>Fiber</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.kcalPerGram}</TableCell>
              <TableCell>{item.carbohydrateRatio}</TableCell>
              <TableCell>{item.proteinRatio}</TableCell>
              <TableCell>{item.fatRatio}</TableCell>
              <TableCell>{item.fiberRatio}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
