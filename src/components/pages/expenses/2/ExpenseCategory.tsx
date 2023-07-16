import { type FC } from 'react'

import { Button } from 'flowbite-react'
import { Divider } from '~/components/Divider'
import { type Category } from '~/constants/categories'

interface ExpensePhaseProps {
	title: string
	categories: Category[]
}

export const ExpenseCategory: FC<ExpensePhaseProps> = ({ title, categories }) => {
	return (
		<div className="flex flex-col items-start gap-4 w-full">
			<div className="text-gray-900 text-4xl font-semibold">{title}</div>
			<Divider />
			<div className="w-full grid grid-cols-4 gap-6">
				{categories.map((category) => (
					<Button color="light" key={category.title} disabled={category.disabled}>
						{category.title}
					</Button>
				))}
			</div>
		</div>
	)
}
