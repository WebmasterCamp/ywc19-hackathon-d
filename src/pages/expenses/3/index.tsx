import { AiOutlineArrowRight } from 'react-icons/ai'

import { Button, Card } from 'flowbite-react'
import { Expense } from '~/Expense'
import { Divider } from '~/components/Divider'
import { ExpenseLayout } from '~/components/Layout/ExpenseLayout'
import { Layout } from '~/components/Layout/Layout'
import { Steps } from '~/components/Step/Steps'
import CostTimeline from '~/components/pages/CostTimeline'

import { expensesSteps } from '../1'

const ExpensesPage = () => {
	return (
		<Layout>
			<ExpenseLayout
				title="ค่าใช้จ่ายทางการแพทย์"
				description="เริ่มคำนวณวางแผนการเงินให้ลูกในอนาคตของคุณ"
			>
				<div className="w-full flex flex-col gap-y-16">
					<Steps items={expensesSteps} activeStep={3} />

					<div>
						<h1 className="text-4xl font-semibold text-gray-900">ค่าใช้จ่ายก่อนคลอดบุตร</h1>
						<div className="bg-slate-500 w-full min-h-96"></div>
					</div>

					<CostTimeline />

					<div className="flex flex-col gap-y-4">
						<Expense
							title="ลูกคลอด"
							subtitle="ตรวจสุขภาพ, ฝากครรภ์, ทำคลอด, "
							price={10000}
							tailwindColor="bg-cyan-700"
						/>
						<Expense
							title="เตรียมอนุบาล"
							subtitle="ผ้าอ้อม, นมผง"
							price={10000}
							tailwindColor="bg-cyan-600"
						/>
						<Expense title="อนุบาล" subtitle="ค่าเทอม" price={10000} tailwindColor="bg-cyan-500" />
						<Expense title="ประถม" subtitle="ค่าเทอม" price={10000} tailwindColor="bg-cyan-400" />
					</div>
					<div className="mt-4 flex flex-col gap-y-4">
						<div className="flex gap-y-4">
							<h1 className="text-xl font-bold">ยอดรวมค่าใช้จ่ายทั้งหมด</h1>
							<h5 className="text-xl ml-auto font-bold">40000 บาท</h5>
						</div>
						<div className="w-full">
							<Divider />
						</div>
						<div className="flex">
							<h1 className="text-xl font-bold">ระยะเวลาที่ใช้ในการเก็บ</h1>
							<h5 className="text-xl ml-auto font-bold">XXX บาท</h5>
						</div>
						<div className="flex">
							<h1 className="text-xl font-bold">ตกเดือนละ</h1>
							<h5 className="text-xl ml-auto font-bold">XXX บาท</h5>
						</div>
					</div>
				</div>

				<div>
					<h1 className="text-4xl font-semibold text-gray-900">ตัวเลือกทางการเงิน</h1>
					<div className="flex flex-wrap gap-6">
						{[1, 2, 3].map((_, index) => (
							<Card key={index} className="w-96">
								<img src="https://picsum.photos/1440/585" alt="blog image" className="h-[136px]" />
								<div className="text-gray-900 text-2xl font-bold leading-[30px]">
									ออมผ่านประกันชีวิต
								</div>
								<Button>
									Read more
									<AiOutlineArrowRight className="ml-2" />
								</Button>
							</Card>
						))}
					</div>
				</div>
			</ExpenseLayout>
		</Layout>
	)
}

export default ExpensesPage
