import { type FC } from 'react'

interface SelectProps {
	label: string
	options: {
		value: string
		label: string
	}[]
	placeholder?: string
}

export const Select: FC<SelectProps> = ({ label, options, placeholder = 'เลือกรายการ' }) => {
	return (
		<div>
			<label htmlFor="select" className="block mb-2 text-gray-900 text-2xl font-semibold">
				{label}
			</label>
			<select
				id="select"
				className="w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			>
				<option selected>{placeholder}</option>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	)
}
