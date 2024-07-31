import TableCell from "@mui/material/TableCell";

import theme from "../../theme/theme";

export default function TableHeadCell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
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
}
