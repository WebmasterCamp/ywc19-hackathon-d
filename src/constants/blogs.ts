export interface Blog {
	slug: string
	title: string
	imageURL: string
	tags: string[]
	createdAt: Date
	author: string
	readingTime: string
	content: string[]
}

export const blogs: Blog[] = [
	{
		slug: '1',
		title: 'เลี้ยงลูกควรใช้เงินเท่าไหร่?',
		imageURL: 'https://picsum.photos/1440/585',
		tags: ['ค่าใช้จ่าย', 'เลี้ยงดูบุตร'],
		createdAt: new Date('2023-07-16'),
		author: 'ปอนด์',
		readingTime: '5 mins',
		content: [
			'ค่าใช้จ่ายของลูกมีอะไรบ้าง?',
			'เคยมีคำกล่าวว่า "ลูกเปรียบดั่งแก้วตาดวงใจของพ่อแม่" ดังนั้นแล้วนับแต่การตั้งครรภ์ การวางแผนทางการเงินระยะยาวที่ดีพอ จึงเป็นสิ่งที่มีความสำคัญอย่าง ซึ่งเป็นหน้าที่ของพ่อแม่ผู้ปกครองที่จะวางแผนทางการเงินที่รัดกุมเหมาะสม เพื่อลูกจะได้เติบโตขึ้นอย่างมีศักยภาพมีพัฒนาการที่สมบูรณ์พร้อมที่สุดสามารถใช้ชีวิตของตนและดำรงชีวิตอยู่ในสังคมอย่างสมบูรณ์',
			'ค่าใช้จ่ายช่วงตั้งครรภ์-คลอด',
			'นับแต่การตั้งครรภ์จนถึงการคลอดคุณแม่จะต้องไปฝากครรภ์ และพบแพทย์เสมอ ซึ่งหากเราคำนวณค่าใช้จ่ายตลอด9เดือนจะประกอบด้วยค่าใช้จ่ายในการฝากครรภ์ 1,500-2,000 บาท ต่อเดือน ค่าทำคลอดอยู่ในช่วง 30,000 - 100,000 บาท',
			'ต่อมาในช่วงหลังสงครามโลกครั้งที่ 2 ความเข้มข้นของการใช้วาทกรรมในการโจมตีชนพื้นเมืองในแถบพื้นที่สูงก็ทวีความรุนแรงมากยิ่งขึ้น โดยเริ่มจากการจัดทำแผนที่ภาพถ่ายทางอากาศช่วงสงครามเย็น อันเป็นหนึ่งในความพยายามที่จะควบคุมการการย้ายที่ทำกินและที่อยู่อาศัยของชนพื้นเมืองในพื้นที่สูง ซึ่งพวกเขาต่างถูกมองว่าเป็น ‘ภัยคุกคามของรัฐ’  ‘คนอื่น’ และเป็น ‘ชาวเขา’ นอกจากนี้ยังมีเรื่องการขยายตัวของขบวนการคอมมิวนิสต์ที่ชนพื้นเมืองถูกใส่รหัสหมายในฐานะต้นเหตุของการขยายตัวของแนวคิดดังกล่าว และการสร้างวาทกรรมที่ถูกถ่ายทอด ผลิตซ้ำ และทำให้เกิดความเข้าใจผิดมาอย่างต่อเนื่องและยาวนานเกี่ยวกับชนพื้นเมืองปกาเกอะญอที่สุด คือ วาทกรรม ‘ไร่เลื่อนลอย’',
			'ค่าใช้จ่ายในการเลี้ยงดูบุตรหลังคลอด',
			'คุณพ่อ คุณแม่ จะต้องจัดเตรียมอุปกรณ์ในการเลี้ยงดูลูกให้พร้อม เช่น ค่าเสื้อผ้าเด็ก ค่าของใช้เด็กอ่อน ซึ่งขึ้นอยู่กับวิถีชีวิตและการวางแผนภายในครอบครัว ตลอดจนค่าใช้จ่ายต่างๆที่เกี่ยวเนื่อง',
			'ดังนั้นแล้วคุณพ่อคุณแม่จะต้องวางแผนทางการเงินที่รัดกุม มีคุณภาพมากเพียงพอเพื่อการดำเนินชีวิตที่ดีอย่างสวัสดิภาพภายในสังคม',
		],
	},
	{
		slug: '2',
		title: 'รีวิวการรับบริการจากจากคุณเกด คุณแม่มือใหม่วัย 27 ปี',
		imageURL: '/images/blog-2.jpg',
		tags: ['ค่าใช้จ่าย', 'เลี้ยงดูบุตร'],
		createdAt: new Date('2023-07-16'),
		author: 'ปอนด์',
		readingTime: '5 mins',
		content: [
			'คุณเกด พนักงานออฟฟิตและคุณแม่มือใหม่ในวั 27 ปี แต่งงานกับสามีเมื่อปลายปี 62 ที่ผ่านมา หลังการตั้งครรภ์ คุณเกดเล่ากับเราว่าด้วความที่เป็นคนแม่มือใหม่และการวางแผนชีวิตของลูกเป็นเรื่องที่มีความสำคัญอย่างยิ่ง',
			'คุณเกดเห็นความสำคัญในเรื่องทางการเงินที่คุณเกดและสามีมีความต้องการที่จะ สร้างความมั่นคงสำหรับในอนาคต ลูกในเรื่องของประกันชีวิตที่จะสร้างหลักประกันในการดำเนินชีวิตให้ลูก การศึกษาที่ดีมีคุณภาพเสริมสร้างพัฒนาการของลูก และต้องการสินเชื่อ ด้วยความที่คุณเป็นพนักงานออฟฟิตเงินเดือนของเราไม่ได้เยอะขนาดนั้นในตอนนี้จึงมองหาสินเชื่อเพื่อสร้างความมั่นคงทางครอบครัว เห็นความสำคัญในเรื่องทางการเงินที่สร้างความมั่นคงสำหรับลูก',
			'ซึ่งหลังการเข้าบริการของเรา คุณเกดเล่าว่าจากที่ไม่รู้อะไรเลย ไม่มีความเข้าใจว่าควรวางแผนการดำเนินการเกี่ยวกับลูกอย่างไร สู่การเข้าใจว่าเราควรทำอย่างไร ทำอะไร เพื่ออนาคตของลูก ตั้งแต่การตั้งครรภ์ การคลอดบุตร วัยทารก และการเติบโตขึ้นอย่างมั่นคงของเขาในอนาคต บริการนี้เป็นบริการที่ช่วยทางด้านการวางแผนที่ดีมาก',
		],
	},
]
