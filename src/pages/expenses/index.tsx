import { Layout } from "~/components/Layout"
import { type Expense, expenses } from "~/constants/expenses"
import { Table } from "antd"
import { type ColumnsType } from "antd/es/table"
import { Navbar } from "~/components/Navbar";

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
      <div className="flex flex-col gap-y-20 p-8">
        <h1 className="text-xl font-bold">เริ่มคำนวณวางแผนการเงินให้ลูกในอนาตคของคุณ</h1>
        <div>
          {/* receive user income UI here */}
        </div>

      </div>
    </Layout>
  )
}

export default ExpensesPage