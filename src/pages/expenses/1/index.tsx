import { Layout } from '~/components/Layout'
import { ExpenseLayout } from '~/components/Layout/ExpenseLayout'
import { StageBar } from '~/components/StageBar'

const ExpensesPage = () => {
  return (
    <Layout>
      <ExpenseLayout title="เริ่มคำนวณวางแผนการเงินให้ลูกในอนาคตของคุณ">
        <StageBar stages={[{
          title: '', description: "something"
        }]} activeStage={1} />
        <h1>
          ข้อมูลผู้ปกครอง
        </h1>

      </ExpenseLayout>
    </Layout>
  )
}

export default ExpensesPage
