import { ExpenseLayout } from '~/components/Layout/ExpenseLayout'
import { Layout } from '~/components/Layout/Layout'
import { Steps, type StepsProps } from '~/components/Step/Steps'

export const expensesSteps: StepsProps["items"] = [
  {
    prompt: "กรอกข้อมูลรายได้",
    step: 1,
  },
  {
    prompt: "วางแผนการเงิน",
    step: 2
  },
  {
    prompt: "สรุปแผนการเงิน",
    step: 3
  }
]

const ExpensesPage = () => {
  return (
    <Layout>
      <ExpenseLayout title="เริ่มคำนวณวางแผนการเงินให้ลูกในอนาคตของคุณ" description="เริ่มคำนวณวางแผนการเงินให้ลูกในอนาคตของคุณ">
        {/* <StageBar stages={[{
          title: '', description: "something"
        }]} activeStage={1} />
        <h1>
          ข้อมูลผู้ปกครอง
        </h1> */}
        <Steps items={expensesSteps} />

      </ExpenseLayout>
    </Layout>
  )
}

export default ExpensesPage
