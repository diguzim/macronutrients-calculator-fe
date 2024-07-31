import TableCell from "@mui/material/TableCell";

import theme from "../../theme/theme";

export default function TableBodyCell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TableCell
      sx={{
        fontSize: "1rem",
        color: theme.colors.black,
      }}
    >
      {children}
    </TableCell>
  );
}
