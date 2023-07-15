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
}
