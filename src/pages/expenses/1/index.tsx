import { AiOutlineArrowRight } from 'react-icons/ai'

import { Button } from 'flowbite-react'
import Link from 'next/link'
import { Divider } from '~/components/Divider'
import { ExpenseLayout } from '~/components/Layout/ExpenseLayout'
import { Layout } from '~/components/Layout/Layout'
import { Select } from '~/components/Select'
import { Steps, type StepsProps } from '~/components/Step/Steps'

const steps: StepsProps['items'] = [
	{
		prompt: 'กรอกข้อมูลรายได้',
		step: 1,
		active: true,
	},
	{
		prompt: 'วางแผนการเงิน',
		step: 2,
	},
	{
		prompt: 'สรุปแผนการเงิน',
		step: 3,
	},
]

const ExpensesPage = () => {
	return (
		<Layout>
			<ExpenseLayout title="เริ่มคำนวณวางแผนการเงินให้ลูกในอนาคตของคุณ">
				<div className="flex flex-col items-center gap-12 mt-12">
					<Steps items={steps} />
					<Divider />
					<div>
						<div className="text-gray-900 text-4xl font-semibold">
							กรอกข้อมูลเพื่อเริ่มต้นวางแผนการเงิน
						</div>
						<div className="mt-10 flex gap-16">
							<div className="flex flex-col gap-8">
								<Select label="รายได้ต่อครัวเรือน/เดือน" options={[]} />
								<Select label="มูลค่าเงินออมสะสม" options={[]} />
							</div>
							<div className="flex flex-col gap-8">
								<Select label="หนี้สินต่อครัวเรือน/เดือน" options={[]} />
								<Select label="มูลค่ารวมสินทรัพย์อื่น" options={[]} />
							</div>
						</div>
					</div>
					<Link href="/expenses/2" className="mt-8">
						<Button className="w-[505px]">
							เริ่มต้นวางแผนการเงินแบบละเอียด
							<AiOutlineArrowRight className="ml-2" />
						</Button>
					</Link>
				</div>
			</ExpenseLayout>
		</Layout>
	)
}

export default ExpensesPage
