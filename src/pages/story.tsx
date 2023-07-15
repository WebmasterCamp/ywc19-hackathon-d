import { StageBar } from '~/components/StageBar'
import { StageItem } from '~/components/StageBar/StageItem'

const StoryPage = () => {
	return (
		<div className="flex flex-col space-y-4 p-8">
			<StageItem className="w-72" title="ขั้นตอนที่ 1" description="กรอกข้อมูลรายได้" />
			<StageItem className="w-72" title="ขั้นตอนที่ 2" description="วางแผนการเงิน" isActive />
			<StageBar
				stages={[
					{
						title: 'ขั้นตอนที่ 1',
						description: 'กรอกข้อมูลรายได้',
					},
					{
						title: 'ขั้นตอนที่ 2',
						description: 'วางแผนการเงิน',
					},
					{
						title: 'ขั้นตอนที่ 3',
						description: 'สรุปแผนการเงิน',
					},
				]}
				activeStage={1}
			/>
		</div>
	)
}

export default StoryPage
