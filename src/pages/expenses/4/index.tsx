import { Layout } from "~/components/Layout"
import { ExpenseLayout } from "~/components/Layout/ExpenseLayout"

const ExpensesPage = () => {
    return (
        <Layout>
            <ExpenseLayout title="สรุปแผนการเงิน">
                {/* insert your UI here */}
            </ExpenseLayout>
        </Layout>
    )
}

export default ExpensesPage