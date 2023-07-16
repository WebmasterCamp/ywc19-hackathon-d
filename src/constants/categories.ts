export interface Item {
	title: string
	cost: number
}

export interface Category {
	title: string
	disabled: boolean
	items?: Item[]
}

export interface Phase {
	title: string
	categories: Category[]
}

export const preBirthCategories: Category[] = [
	{
		title: 'ฝากครรภ์',
		disabled: false,
		items: [
			{
				title: 'โรงพยาบาลบำรุงราษฎร์',
				cost: 98000,
			},
			{
				title: 'โรงพยาบาลเซนต์หลุยส์',
				cost: 50000,
			},
			{
				title: 'โรงพยาบาลเกษมราษฎร์ บางแค',
				cost: 37000,
			},
			{
				title: 'โรงพยาบาลพระรามเก้า',
				cost: 85000,
			},
			{
				title: 'โรงพยาบาลสมิติเวช สุขุมวิท',
				cost: 50000,
			},
		],
	},
	{
		title: 'ตรวจสุขภาพมารดา',
		disabled: true,
	},
]

export const babyCategories: Category[] = [
	{
		title: 'วัคซีนป้องกันโรค',
		disabled: true,
	},
	{
		title: 'นมบุตร',
		disabled: true,
	},
	{
		title: 'ผ้าอ้อม',
		disabled: true,
	},
	{
		title: 'พี่เลี้ยงเด็ก',
		disabled: true,
	},
]

export const kindergartenCategories: Category[] = [
	{
		title: 'โรงเรียนอนุบาล',
		disabled: true,
	},
	{
		title: 'ชุดนักเรียน',
		disabled: true,
	},
	{
		title: 'อุปกรณ์การเรียน',
		disabled: true,
	},
	{
		title: 'พี่เลี้ยงเด็ก',
		disabled: true,
	},
]

export const phases = [
	{
		title: 'ค่าใช้จ่ายก่อนคลอดบุตร',
		categories: preBirthCategories,
	},
	{
		title: 'วัยทารก',
		categories: babyCategories,
	},
	{
		title: 'วัยอนุบาล',
		categories: kindergartenCategories,
	},
]
