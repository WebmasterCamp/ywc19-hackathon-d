import { type FC } from "react"

export interface StepItemProps {
    prompt: string,
    step: number | undefined,
    active?: boolean
}

const StepItem: FC<StepItemProps> = ({ prompt, step, active = false }) => {
    return (
        <div className={`flex flex-col gap-y-2 text-center`}>
            <div>
                <h5 className={`inline-block w-fit p-2 rounded-full font-noto text-white text-lg bg-teal-500 ${active ? "outline-teal-700 outline-2 outline-offset-4 outline" : "outline-2"}`}>
                    {step}
                </h5>
            </div>
            <h2>{prompt}</h2>
        </div>
    )
}

export { StepItem }