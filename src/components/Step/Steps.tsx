import { type FC } from 'react'

import { StepItem, type StepItemProps } from './StepItem'

export interface StepsProps {
	items: StepItemProps[]
	activeStep: number
}

export const Steps: FC<StepsProps> = ({ items, activeStep }) => {
	return (
		<div className="flex justify-center items-center gap-x-20">
			{items.map((item, index) => (
				<StepItem
					key={index}
					active={item.step === activeStep}
					prompt={item.prompt}
					step={item.step}
				/>
			))}
		</div>
	)
}
