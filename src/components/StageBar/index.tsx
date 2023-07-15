import { type FC, Fragment } from 'react'

import { RightOutlined } from '@ant-design/icons'

import { StageItem } from './StageItem'

interface StageBarProps {
	stages: {
		title: string
		description: string
	}[]
	activeStage: number
}

export const StageBar: FC<StageBarProps> = ({ stages, activeStage }) => {
	return (
		<div className="flex gap-8 items-center">
			{stages.map((stage, index) => (
				<Fragment key={index}>
					<StageItem
						title={stage.title}
						description={stage.description}
						isActive={index === activeStage}
					/>
					{index !== stages.length - 1 && <RightOutlined className="w-6 h-6" />}
				</Fragment>
			))}
		</div>
	)
}
