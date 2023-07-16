import { type FC } from 'react'

import { Divider } from '~/components/Divider'
import { type Phase } from '~/constants/categories'

import { ExpenseSelection } from './ExpenseSelection'
import { NewCardButton } from './NewCardButton'

interface ExpensePhaseProps {
	phase: Phase
}

export const ExpensePhase: FC<ExpensePhaseProps> = ({ phase: { title, categories } }) => {
	return (
		<div className="flex flex-col items-start gap-4 w-full">
			<div className="text-gray-900 text-4xl font-semibold">{title}</div>
			<Divider />
			<div className="w-full grid grid-cols-4 gap-6">
				<NewCardButton
					onClick={() => {
						alert('test')
					}}
				/>
				{/* TODO: add selected items as cards here */}
			</div>
			<ExpenseSelection phase={{ title, categories }} />
		</div>
	)
}
