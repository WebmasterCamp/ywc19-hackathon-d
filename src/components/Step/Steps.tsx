import { type FC } from "react";
import { StepItem, type StepItemProps } from "./StepItem";

export interface StepsProps { items: StepItemProps[] }

export const Steps: FC<StepsProps> = ({ items }) => {
    return (
        <div className="flex justify-center items-center gap-x-4">
            {
                items.map((item, index) => (
                    <StepItem key={index} active={item.active} prompt={item.prompt} step={index} />
                ))
            }
        </div>
    )
}