import { type FC } from 'react'

import { Button } from 'flowbite-react'
import { type Phase } from '~/constants/categories'

interface ExpenseSelectionProps {
	phase: Phase
}

export const ExpenseSelection: FC<ExpenseSelectionProps> = ({ phase }) => {
	return (
		<div className="flex flex-col w-full">
			<div className="w-full grid grid-cols-4 gap-6">
				{phase.categories.map((category) => (
					<Button color="light" key={category.title} disabled={category.disabled}>
						{category.title}
					</Button>
				))}
			</div>
		</div>
	)
}
