import type { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex items-center">
      <div className="p-4">
        {children}
      </div>
    </div>
  )
}