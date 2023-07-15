import { type FC, type ReactNode } from "react"

interface ExpenseLayoutProps {
    title: string,
    children: ReactNode
}

export const ExpenseLayout: FC<ExpenseLayoutProps> = ({
    title,
    children
}) => {
    return (
        <div className="font-noto flex flex-col gap-y-20 p-8">
            <h1 className="text-xl font-bold">
                {title}
            </h1>
            {
                children
            }
        </div>
    )
}