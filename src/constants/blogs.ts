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
		title: 'Lorem ipsum dolor sit amet consectetur. Senectus et mauris posuere mi leo sed.',
		imageURL: 'https://picsum.photos/1440/585',
		tags: ['tag1', 'tag2', 'tag3'],
		createdAt: new Date('2023-07-16'),
		author: 'John Smith',
		readingTime: '5 mins',
		content: [
			'‘ปกาเกอะญอ’ อาจไม่ใช่ชื่อที่คุ้นหูใครหลาย ๆ คนนัก แต่หากกล่าวถึงชาวปกาเกอะญอด้วยชื่อ ‘กะเหรี่ยง’ ก็คงจะทำให้รู้สึกคุ้นชินกันมากขึ้น ปกาเกอะญอนั้นเป็นชื่อที่ชาวกะเหรี่ยงใช้เรียกตนเอง โดยมีความหมายว่า คนหรือมนุษย์ ทั้งนี้ยังมีชื่อที่ชาวกะเหรี่ยงใช้เรียกตนเองที่เราอาจไม่คุ้นเคยอยู่อีกจำนวนหนึ่ง เช่น จกอ และ คานยอ โดยชื่อ ‘ปกาเกอะญอ’ เกิดขึ้นในช่วงที่ชาวกะเหรี่ยงต้องการตอบโต้กับวาทกรรม ‘ปัญหาของชาวเขา’ ตั้งแต่ต้นทศวรรษ 2530 ซึ่งวาทกรรมปัญหาของชาวเขาเป็นหนึ่งในวาทกรรมของรัฐบาลไทยที่พยายามจะสร้างภาพจำให้กับชนพื้นเมืองและกลุ่มชาติพันธุ์อื่น ๆ ว่ามีวัฒนธรรมที่ด้อยค่าและไม่ใช่อารยชนอย่างคนไทยทั่ว ๆ ไป โดยในเวลาต่อมาได้มีการสร้างวาทกรรมอีกจำนวนหนึ่งเพื่อใช้ในการบิดเบือนและโจมตีชนเผ่าพื้นเมืองในพื้นที่ต่าง  ๆ',
			'การก่อร่างสร้างตัวของวาทกรรมที่รัฐใช้เพื่อสร้างภาพจำอันเลวร้ายให้กับชนพื้นเมือง โดยเฉพาะอย่างยิ่งกลุ่มชนพื้นเมืองบนพื้นที่สูงในแถบภาคเหนือ เริ่มต้นขึ้นตั้งแต่มีการปฏิรูปมณฑลเทศาภิบาลในช่วงรัชกาลที่ 5 ซึ่งเป็นช่วงที่สยามในขณะนั้น ได้ผนึกรวมเอาล้านนาเข้าเป็นส่วนหนึ่งกับสยามแล้ว โดยก่อนหน้านั้นในยุคจารีต ล้านนาและชนพื้นเมืองในพื้นที่สูงต่างมีปฏิสัมพันธ์ที่ค่อนข้างดีต่อกัน เพราะรัฐล้านนามีความต้องการใช้สินค้าจำพวกของป่า เขาสัตว์ งาช้าง และขี้ผึ้ง ส่งผลให้ชนพื้นเมืองในพื้นที่สูงต่างมีภาพจำเชิงบวกและถูกยอมรับในสายตาของชนชั้นปกครอง อันจะเห็นได้จากตำนานและงานวรรณกรรมในสมัยนั้น แต่ภายหลังการรวมเข้าของล้านนาและสยามทำให้มุมมองต่อชนพื้นเมืองเปลี่ยนไป ผ่านการสร้างวาทกรรมของชนชั้นนำชาวสยาม โดยสร้างภาพจำว่าชนพื้นเมืองบนพื้นที่สูงนั้นเป็นพวก ‘คนป่า’ ‘คนล้าหลัง’ และ ‘ไร้อารยะ’ ที่มีวิถีชีวิตที่ไม่เป็นที่น่าพิสมัยและแตกต่างจากอารยชนชาวสยาม ซึ่งการกระทำดังกล่าวนั้นเป็นไปเพื่อที่จะยกให้สยามกลายเป็นชาติที่มีอารยะและมีความทัดเทียมเทียบเท่ากับชาติตะวันตก',
			'ต่อมาในช่วงหลังสงครามโลกครั้งที่ 2 ความเข้มข้นของการใช้วาทกรรมในการโจมตีชนพื้นเมืองในแถบพื้นที่สูงก็ทวีความรุนแรงมากยิ่งขึ้น โดยเริ่มจากการจัดทำแผนที่ภาพถ่ายทางอากาศช่วงสงครามเย็น อันเป็นหนึ่งในความพยายามที่จะควบคุมการการย้ายที่ทำกินและที่อยู่อาศัยของชนพื้นเมืองในพื้นที่สูง ซึ่งพวกเขาต่างถูกมองว่าเป็น ‘ภัยคุกคามของรัฐ’  ‘คนอื่น’ และเป็น ‘ชาวเขา’ นอกจากนี้ยังมีเรื่องการขยายตัวของขบวนการคอมมิวนิสต์ที่ชนพื้นเมืองถูกใส่รหัสหมายในฐานะต้นเหตุของการขยายตัวของแนวคิดดังกล่าว และการสร้างวาทกรรมที่ถูกถ่ายทอด ผลิตซ้ำ และทำให้เกิดความเข้าใจผิดมาอย่างต่อเนื่องและยาวนานเกี่ยวกับชนพื้นเมืองปกาเกอะญอที่สุด คือ วาทกรรม ‘ไร่เลื่อนลอย’',
		],
	},
]