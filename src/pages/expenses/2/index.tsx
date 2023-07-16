import { ExpenseLayout } from '~/components/Layout/ExpenseLayout'
import { Layout } from '~/components/Layout/Layout'
import { Steps, type StepsProps } from '~/components/Step/Steps'
import { ExpensePhase } from '~/components/pages/expenses/2/ExpenseCategory'
import { phases } from '~/constants/categories'

import { expensesSteps } from '../1'

const items: StepsProps['items'] = expensesSteps

const ExpensesPage = () => {
	if (items[1]?.prompt !== undefined) {
		items[1].active = true
	}

	return (
		<Layout>
			<ExpenseLayout title="วางแผนการเงินให้ลูก">
				<Steps items={items} />
				<div className="flex flex-col items-center gap-12 mt-12 px-24">
					{phases.map((phase) => (
						<ExpensePhase key={phase.title} phase={phase} />
					))}
				</div>
			</ExpenseLayout>
		</Layout>
	)
}

export default ExpensesPage
