import { type FC } from 'react'

import { Button } from 'flowbite-react'
import { atom, useAtom } from 'jotai'
import { type Phase } from '~/constants/categories'

interface ExpenseSelectionProps {
	phase: Phase
}

const selectedCategoryAtom = atom(0)

export const ExpenseSelection: FC<ExpenseSelectionProps> = ({ phase }) => {
	const [selectedCategory] = useAtom(selectedCategoryAtom)
	return (
		<div className="flex flex-col w-full">
			<div className="w-full grid grid-cols-4 gap-6">
				{phase.categories.map((category) => (
					<Button color="light" key={category.title} disabled={category.disabled}>
						{category.title}
					</Button>
				))}
			</div>
			<div className="mt-10 text-gray-900 text-2xl font-semibold ">ค้นหา</div>
			<div className="flex flex-col gap-8 w-full mt-4">
				{phase.categories[selectedCategory]?.items?.map((item) => (
					<div key={item.title} className="w-full">
						<div className="flex border border-neutral-200 p-4 items-center">
							<img src="/images/hospital1.png" alt="img" width={192} height={80} className="mr-4" />
							<div className="w-28 flex-grow ">
								<div className="text-gray-900 text-xl font-semibold leading-[30px]">
									{item.title}
								</div>
							</div>
							<div className="ml-4 w-28">
								<div className="flex flex-col">
									<div className="text-gray-900 text-xl font-semibold leading-[30px]">
										ค่าใช้จ่าย
									</div>
									<div className="text-gray-500 text-xl font-medium leading-[30px]">
										{item.cost} บาท
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
