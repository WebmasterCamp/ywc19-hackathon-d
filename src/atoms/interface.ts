import { type Item } from '~/constants/categories'

interface SelectedCategoryAtom {
	title: string
	selectedItems: Item[]
}

interface SelectedExpense {
	categories: SelectedCategoryAtom[]
}
