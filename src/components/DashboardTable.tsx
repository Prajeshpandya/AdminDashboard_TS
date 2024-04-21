import { Column } from "react-table";
import TableHOC from "./TableHOC";

interface dataType {
  id: string;
  quantity: Number;
  discount: Number;
  amount: Number;
  status: string;
}
const columns: Column<dataType>[] = [
  { Header: "Id", accessor: "id" },
  { Header: "Quantity", accessor: "quantity" },
  { Header: "Discount", accessor: "discount" },
  { Header: "Amount", accessor: "amount" },
  { Header: "Status", accessor: "status" },
];

export default function DashboardTable({ data = [] }: { data: dataType[] }) {
  return TableHOC<dataType>(
    columns,
    data,
    "transaction_box",
    "Top Transaction"
  )();
}
