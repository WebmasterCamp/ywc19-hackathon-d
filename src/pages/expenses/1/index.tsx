import { type ColumnsType } from 'antd/es/table'
import { Layout } from '~/components/Layout'
import { ExpenseLayout } from '~/components/Layout/ExpenseLayout'
import { type Expense } from '~/constants/expenses'

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
]

const ExpensesPage = () => {
	return (
		<Layout>
			<ExpenseLayout title="เริ่มคำนวณวางแผนการเงินให้ลูกในอนาคตของคุณ">
				<div>{/* receive user income UI here */}</div>
			</ExpenseLayout>
		</Layout>
	)
}

export default ExpensesPage
