import type { FC, ReactNode } from 'react'

import { Navbar } from '../Navbar'

interface LayoutProps {
	beforeContent?: ReactNode
	children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children, beforeContent }) => {
	return (
		<div className="flex flex-col w-full font-noto-looped">
			<Navbar />
			{beforeContent}
			<div className="p-4">{children}</div>
		</div>
	)
}
