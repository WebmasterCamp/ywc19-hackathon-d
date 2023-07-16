import { type FC } from 'react'

import { Divider } from '~/components/Divider'
import { type Phase } from '~/constants/categories'

import { ExpenseSelection } from './ExpenseSelection'
import { NewCardButton } from './NewCardButton'

interface ExpensePhaseProps {
	phase: Phase
	selected: boolean
	setSelected: () => void
}

export const ExpensePhase: FC<ExpensePhaseProps> = ({
	phase: { title, categories },
	selected,
	setSelected,
}) => {
	return (
		<div className="flex flex-col items-start gap-4 w-full">
			<div className="text-gray-900 text-4xl font-semibold">{title}</div>
			<Divider />
			<div className="w-full grid grid-cols-4 gap-6">
				<NewCardButton
					onClick={() => {
						setSelected()
					}}
				/>
				{/* TODO: add selected items as cards here */}
			</div>
			{selected && <ExpenseSelection phase={{ title, categories }} />}
		</div>
	)
}
