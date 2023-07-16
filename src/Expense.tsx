import { type FC } from "react"

interface ExpenseProps {
    tailwindColor: string
    title: string
    subtitle: string,
    price: number
}

export const Expense: FC<ExpenseProps> = (props) => {
    return (
        <div className="w-full flex gap-x-8 h-auto w-full">
            {/* color block */}
            <div className={`${props.tailwindColor} w-36 h-24`}>

            </div>
            <div className="flex flex-col justify-around h-full py-2">
                <h1 className="font-bold text-xl">
                    {props.title}
                </h1>
                <h2 className="text-lg">
                    {props.subtitle}
                </h2>
            </div>
            <div className="ml-auto justify-around h-full py-2">
                <h1 className="text-lg font-semibold">
                    {props.price} บาท
                </h1>
            </div>
        </div>
    )
}