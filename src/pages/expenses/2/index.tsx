import { ExpenseLayout } from '~/components/Layout/ExpenseLayout'
import { Layout } from '~/components/Layout/Layout'
import { Steps, type StepsProps } from '~/components/Step/Steps'
import { ExpenseCategory } from '~/components/pages/expenses/2/ExpenseCategory'
import {
	babyCategories,
	kindergartenCategories,
	preBirthCategories,
	primarySchoolCategories,
} from '~/constants/categories'

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
					<ExpenseCategory title="ค่าใช้จ่ายก่อนคลอดบุตร" categories={preBirthCategories} />
					<ExpenseCategory title="วัยทารก" categories={babyCategories} />
					<ExpenseCategory title="วัยอนุบาล" categories={kindergartenCategories} />
					<ExpenseCategory title="วัยประถม" categories={primarySchoolCategories} />
				</div>
			</ExpenseLayout>
		</Layout>
	)
}

export default ExpensesPage
