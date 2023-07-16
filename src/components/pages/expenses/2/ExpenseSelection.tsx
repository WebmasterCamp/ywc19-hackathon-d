import { type FC } from 'react'

import { Button, Card } from 'flowbite-react'
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
			<div className="flex flex-col gap-8 w-full">
				{phase.categories[selectedCategory]?.items?.map((item) => (
					<Card key={item.title} horizontal imgSrc="/images/hospital1.png">
						<div className="flex">
							<div>
								<div className="text-gray-900 text-xl font-semibold leading-[30px]">
									{item.title}
								</div>
							</div>
							<div>
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
					</Card>
				))}
			</div>
		</div>
	)
}
