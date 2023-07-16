import { ExpenseLayout } from '~/components/Layout/ExpenseLayout'
import { Layout } from '~/components/Layout/Layout'
import { Steps, type StepsProps } from '~/components/Step/Steps'
import { expensesSteps } from '../1'

const items: StepsProps["items"] = expensesSteps

const ExpensesPage = () => {

	if (items[1]?.prompt !== undefined) {
		items[1].active = true
	}

	return (
		<Layout>
			<ExpenseLayout title="วางแผนการเงิน" description="เริ่มคำนวณวางแผนการเงินให้ลูกในอนาคตของคุณ">
				<Steps items={items} />
				{
					// Insert your UI here
				}
			</ExpenseLayout>
		</Layout>
	)
}

export default ExpensesPage
