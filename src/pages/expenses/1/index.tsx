import { Layout } from "~/components/Layout"
import { type Expense, expenses } from "~/constants/expenses"
import { Table } from "antd"
import { type ColumnsType } from "antd/es/table"
import { Navbar } from "~/components/Navbar";
import { ExpenseLayout } from "~/components/Layout/ExpenseLayout";

const columns: ColumnsType<Expense> = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
];

const ExpensesPage = () => {
  return (
    <Layout>
      <ExpenseLayout title="เริ่มคำนวณวางแผนการเงินให้ลูกในอนาคตของคุณ">
        <div>
          {/* receive user income UI here */}
        </div>
      </ExpenseLayout>

    </Layout>
  )
}

export default ExpensesPage