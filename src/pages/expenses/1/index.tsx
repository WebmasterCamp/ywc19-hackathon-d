import { AiOutlineArrowRight } from 'react-icons/ai'

import { Button } from 'flowbite-react'
import Link from 'next/link'
import { Divider } from '~/components/Divider'
import { ExpenseLayout } from '~/components/Layout/ExpenseLayout'
import { Layout } from '~/components/Layout/Layout'
import { Select } from '~/components/Select'
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

interface SelectOption {
  value: string
  label: string
}

const ExpensesPage = () => {

  if (expensesSteps[0]?.prompt) {
    expensesSteps[0].active = true
  }

  const monthlyIncome: SelectOption[] = []
  const monthlyDebt: SelectOption[] = []
  const savings: SelectOption[] = []
  const assets: SelectOption[] = []
  return (
    <Layout>
      <ExpenseLayout title="เริ่มคำนวณวางแผนการเงินให้ลูกในอนาคตของคุณ" description="เริ่มคำนวณวางแผนการเงินให้ลูกในอนาคตของคุณ">

        <Steps items={expensesSteps} />
        <Divider />
        <div className="flex flex-col items-center">
          <div>
            <div className="text-gray-900 text-4xl font-semibold">
              กรอกข้อมูลเพื่อเริ่มต้นวางแผนการเงิน
            </div>
            <div className="mt-10 flex gap-16">
              <div className="flex flex-col gap-8">
                <Select label="รายได้ต่อครัวเรือน/เดือน" options={monthlyIncome} />
                <Select label="มูลค่าเงินออมสะสม" options={monthlyDebt} />
              </div>
              <div className="flex flex-col gap-8">
                <Select label="หนี้สินต่อครัวเรือน/เดือน" options={savings} />
                <Select label="มูลค่ารวมสินทรัพย์อื่น" options={assets} />
              </div>
            </div>
          </div>
          <Link href="/expenses/2" className="mt-8">
            <Button className="w-[505px] mt-16">
              เริ่มต้นวางแผนการเงินแบบละเอียด
              <AiOutlineArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </ExpenseLayout>
    </Layout>
  )
}

export default ExpensesPage
