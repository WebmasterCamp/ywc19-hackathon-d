import { ExpenseLayout } from '~/components/Layout/ExpenseLayout'
import { Layout } from '~/components/Layout/Layout'

const ExpensesPage = () => {
	return (
		<Layout>
			<ExpenseLayout title="สรุปแผนการเงิน">{/* insert your UI here */}</ExpenseLayout>
		</Layout>
	)
}

export default ExpensesPage
