import { ExpenseLayout } from '~/components/Layout/ExpenseLayout'
import { Layout } from '~/components/Layout/Layout'
import { Steps } from '~/components/Step/Steps'
import { expensesSteps } from '../1'
import CostTimeline from '~/components/pages/CostTimeline'




const ExpensesPage = () => {

	if (expensesSteps[2]?.prompt) {
		expensesSteps[2].active = true
	}

	return (
		<Layout>
			<ExpenseLayout title="ค่าใช้จ่ายทางการแพทย์" description='เริ่มคำนวณวางแผนการเงินให้ลูกในอนาคตของคุณ'>
				<div className="w-full flex flex-col gap-y-16">
					<Steps items={expensesSteps} />

					<div>
						<h1 className='text-4xl font-semibold text-gray-900'>
							ค่าใช้จ่ายก่อนคลอดบุตร
						</h1>
						<div className="bg-slate-500 w-full min-h-96"></div>

					</div>

					<CostTimeline />

				</div>


			</ExpenseLayout>
		</Layout >
	)
}

export default ExpensesPage
