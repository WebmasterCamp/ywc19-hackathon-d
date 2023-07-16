import { type FC } from 'react'

import { PlusCircleOutlined } from '@ant-design/icons'

interface NewCardButtonProps {
	onClick: () => void
}

export const NewCardButton: FC<NewCardButtonProps> = ({ onClick }) => {
	return (
		<div
			onClick={onClick}
			className="aspect-square rounded-lg border border-dashed border-neutral-400 inline-flex flex-col justify-center items-center gap-2 cursor-pointer"
		>
			<PlusCircleOutlined className="text-2xl" />
			<div className=" text-gray-900 text-lg font-semibold leading-[27px]">เพิ่ม</div>
		</div>
	)
}
