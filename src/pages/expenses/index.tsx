import { Layout } from "~/components/Layout"
import { type Expense, expenses } from "~/constants/expenses"
import { Table } from "antd"
import { type ColumnsType } from "antd/es/table"

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
      <h1 className="font-bold">Expenses</h1>
      <Table columns={columns} dataSource={expenses} rowKey="title" rowSelection={{
        type: "checkbox"
      }}/>
    </Layout>
  )
}

export default ExpensesPage