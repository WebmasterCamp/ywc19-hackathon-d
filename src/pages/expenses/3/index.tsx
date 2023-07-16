import { ExpenseLayout } from '~/components/Layout/ExpenseLayout'
import { Layout } from '~/components/Layout/Layout'
import { Steps } from '~/components/Step/Steps'
import { expensesSteps } from '../1'
import CostTimeline from '~/components/pages/CostTimeline'
import { Expense } from '~/Expense'




const ExpensesPage = () => {

	return (
		<Layout>
			<ExpenseLayout title="ค่าใช้จ่ายทางการแพทย์" description='เริ่มคำนวณวางแผนการเงินให้ลูกในอนาคตของคุณ'>
				<div className="w-full flex flex-col gap-y-16">
					<Steps items={expensesSteps} activeStep={3} />

					<div>
						<h1 className='text-4xl font-semibold text-gray-900'>
							ค่าใช้จ่ายก่อนคลอดบุตร
						</h1>
						<div className="bg-slate-500 w-full min-h-96"></div>

					</div>

					<CostTimeline />

					<div className="flex flex-col gap-y-4">
						<Expense title="ลูกคลอด" subtitle='ตรวจสุขภาพ, ฝากครรภ์, ทำคลอด, ' price={10000} tailwindColor='bg-cyan-700' />
						<Expense title="เตรียมอนุบาล" subtitle='ผ้าอ้อม, นมผง' price={10000} tailwindColor='bg-cyan-600' />
						<Expense title="อนุบาล" subtitle='ค่าเทอม' price={10000} tailwindColor='bg-cyan-500' />
						<Expense title="ประถม" subtitle='ค่าเทอม' price={10000} tailwindColor='bg-cyan-400' />
					</div>

				</div>


			</ExpenseLayout>
		</Layout >
	)
}

export default ExpensesPage
