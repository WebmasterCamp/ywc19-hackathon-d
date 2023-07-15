import { type FC } from 'react'

export interface StageItemProps {
	className?: string
	title: string
	description: string
	isActive?: boolean
}

export const StageItem: FC<StageItemProps> = ({
	className = '',
	title,
	description,
	isActive = false,
}) => {
	return (
		<div
			className={`${className} p-4 flex flex-row space-x rounded-2xl justify-start gap-5 ${
				isActive ? 'bg-zinc-600' : 'bg-zinc-100'
			}`}
		>
			<div className="rounded-full w-20 h-20 bg-zinc-300" />
			<div className="flex flex-col justify-center gap-2">
				<div className={`text-2xl font-semibold ${isActive ? 'text-white' : 'text-black'}`}>
					{title}
				</div>
				<div className={`text-xl font-normal ${isActive ? 'text-white' : 'text-black'}`}>
					{description}
				</div>
			</div>
		</div>
	)
}
