import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Header from "../../../components/header/header";
import theme from "../../../theme/theme";

type NutritionalValues = {
  kcal: number;
  carbohydrate: number;
  protein: number;
  fat: number;
  fiber: number;
};

type NutritionalDetailsProps = {
  nutritionalValues: NutritionalValues;
};

const TableHeadCell = ({ children }: { children: React.ReactNode }) => (
  <TableCell
    sx={{
      fontWeight: "bold",
      fontSize: "1rem",
      color: theme.colors.black,
    }}
  >
    {children}
  </TableCell>
);

export default function NutritionalDetails({
  nutritionalValues: nutritionalDetails,
}: NutritionalDetailsProps) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <Header size={3}>Nutritional data</Header>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="simple table">
          <TableHead>
            <TableRow className="bg-primary">
              <TableHeadCell>Nutrient</TableHeadCell>
              <TableHeadCell>Amount</TableHeadCell>
              <TableHeadCell>Daily Value</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Calories</TableCell>
              <TableCell>{nutritionalDetails.kcal} kcal</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Carbohydrates</TableCell>
              <TableCell>{nutritionalDetails.carbohydrate} g</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Protein</TableCell>
              <TableCell>{nutritionalDetails.protein} g</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Fat</TableCell>
              <TableCell>{nutritionalDetails.fat} g</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Fiber</TableCell>
              <TableCell>{nutritionalDetails.fiber} g</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
