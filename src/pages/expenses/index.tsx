import { Layout } from "~/components/Layout"
import { type Expense, expenses } from "~/constants/expenses"
import type { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "~/components/DataTable"
import { Checkbox } from "@/components/ui/checkbox"

export const columns: ColumnDef<Expense>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "descripiton",
    header: "Description",
  },
]

const ExpensesPage = () => {
  return (
    <Layout>
      <h1 className="font-bold">Expenses</h1>
      <DataTable columns={columns} data={expenses} />
    </Layout>
  )
}

export default ExpensesPage