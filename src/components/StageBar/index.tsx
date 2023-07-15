import { type FC } from "react"

interface StageBarProps {
  stages: {
    title: string
    description: string
  }[]
  activeStage: number
}

export const StageBar: FC<StageBarProps> = ({ stages, activeStage }) => {
  
}