import type { FC, ReactNode } from "react";
import { Navbar } from "../Navbar";

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <div className="p-4">{children}</div>
    </div>
  )
}