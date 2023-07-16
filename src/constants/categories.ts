export interface Category {
	title: string
	disabled: boolean
}

export const preBirthCategories: Category[] = [
	{
		title: 'ตรวจสุขภาพมารดา',
		disabled: false,
	},
	{
		title: 'ฝากครรภ์',
		disabled: false,
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

export const primarySchoolCategories: Category[] = [
	{
		title: 'โรงเรียนประถม',
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
]
