import { atom, useAtom } from 'jotai'
import { ExpenseLayout } from '~/components/Layout/ExpenseLayout'
import { Layout } from '~/components/Layout/Layout'
import { Steps, type StepsProps } from '~/components/Step/Steps'
import { ExpensePhase } from '~/components/pages/expenses/2/ExpenseCategory'
import { phases } from '~/constants/categories'

import { expensesSteps } from '../1'

const items: StepsProps['items'] = expensesSteps

const selectedPhaseAtom = atom(0)

const ExpensesPage = () => {
	const [selectedPhase, setSelectedPhase] = useAtom(selectedPhaseAtom)
	return (
		<Layout>
			<ExpenseLayout title="วางแผนการเงินให้ลูก">
				<Steps items={items} activeStep={2} />
				<div className="flex flex-col items-center gap-12 mt-12 px-24">
					{phases.map((phase, index) => (
						<ExpensePhase
							key={phase.title}
							phase={phase}
							selected={selectedPhase === index}
							setSelected={() => {
								setSelectedPhase(index)
							}}
						/>
					))}
				</div>
			</ExpenseLayout>
		</Layout>
	)
}

export default ExpensesPage
