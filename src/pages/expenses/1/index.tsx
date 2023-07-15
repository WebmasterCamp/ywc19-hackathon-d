import { ExpenseLayout } from '~/components/Layout/ExpenseLayout'
import { Layout } from '~/components/Layout/Layout'

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
