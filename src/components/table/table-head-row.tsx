import TableRow from "@mui/material/TableRow";

export default function TableHeadRow({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TableRow className="bg-gray">{children}</TableRow>;
}
