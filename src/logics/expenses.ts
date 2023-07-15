interface Expenses {
	[name: string]: {
		title: string
		description?: string
		choices: {
			title: string
			description?: string
			imageURL?: string
			price: number
		}[]
	}
}

export const expenses: Expenses = {
	antenatal_care: {
		title: 'ค่าฝากครรภ์',
		description: 'สามารถลดค่าใช้จ่ายด้วยสิทธิประกันสังคม ศึกษาเพิ่มเติมได้จาก www.google.com',
		choices: [
			{
				title: 'โรงพยายาลรัฐ',
				price: 750 * 10,
			},
			{
				title: 'โรงพยาบาลเอกชน',
				price: 4000 * 10,
			},
		],
	},
	give_birth: {
		title: 'ค่าทำคลอด',
		choices: [
			{
				title: 'โรงพยาบาลรัฐ  (คลอดธรรมชาติ)',
				price: 15000,
			},
			{
				title: 'โรงพยาบาลรัฐ (ผ่าคลอด)',
				price: 30000,
			},
			{
				title: 'โรงพยาบาลเอกชน (คลอดธรรมชาติ)',
				price: 90000,
			},
			{
				title: 'โรงพยาบาลเอกชน (ผ่าคลอด)',
				price: 150000,
			},
		],
	},
	powdered_milk: {
		title: 'ค่านมผง',
		choices: [
			{
				title: 'Tier 2 (1 ปี)',
				price: 700 * 12,
			},
			{
				title: 'Tier 1 (1 ปี)',
				price: 1700 * 12,
			},
			{
				title: 'Tier 2 (2 ปี)',
				price: 700 * 24,
			},
			{
				title: 'Tier 1 (2 ปี)',
				price: 1700 * 24,
			},
		],
	},
	baby_sitter: {
		title: 'ค่าพี่เลี้ยงเด็กทารก',
		choices: [
			{
				title: 'ทารกแรกเกิด 10 เดือนแรก',
				price: 14000 * 10,
			},
			{
				title: 'เด็กทารก 2 ปีแรก',
				price: 14000 * 10 + 10000 * 14,
			},
			{
				title: 'เด็กทารก 3 ปีแรก',
				price: 14000 * 10 + 10000 * 26,
			},
		],
	},
	preschool: {
		title: 'ค่าเทอมวัยอนุบาล (3 ปี)',
		choices: [
			{
				title: 'Tier 3',
				price: 17000 * 3,
			},
			{
				title: 'Tier 2',
				price: 30000 * 3,
			},
			{
				title: 'Tier 1',
				price: 100000 * 3,
			},
		],
	},
}
