import { Layout } from "~/components/Layout"
import { ExpenseLayout } from "~/components/Layout/ExpenseLayout"

const ExpensesPage = () => {
    return (
        <Layout>
            <ExpenseLayout title="ค่าใช้จ่ายทางการแพทย์">
                {/* insert your code here */}
            </ExpenseLayout>
        </Layout>
    )
}

export default ExpensesPage