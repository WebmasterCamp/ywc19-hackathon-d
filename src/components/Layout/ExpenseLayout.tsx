import { type FC, type ReactNode } from "react"

interface ExpenseLayoutProps {
    title: string,
    description?: string
    children: ReactNode
}

export const ExpenseLayout: FC<ExpenseLayoutProps> = ({
    title,
    description,
    children
}) => {
    return (
        <div className="font-noto flex flex-col gap-y-8">
            <div className="w-full bg-teal-50 py-8 px-20 flex flex-col gap-y-12">
                <h1 className="text-4xl font-bold">
                    {title}
                </h1>
                {description && <h2 className="text-lg font-bold">
                    {
                        description
                    }
                </h2>}
            </div>
            <div className="w-full h-full px-20 py-8">
                {
                    children
                }
            </div>
        </div>
    )
}