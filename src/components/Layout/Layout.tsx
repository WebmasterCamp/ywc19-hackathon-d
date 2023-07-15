import type { FC, ReactNode } from 'react'

import { Navbar } from '../Navbar'

interface LayoutProps {
	beforeContent?: ReactNode
	children: ReactNode
	px?: number
	py?: number
}

export const Layout: FC<LayoutProps> = ({ children, beforeContent, px = 4, py = 4 }) => {
	return (
		<div className="flex flex-col w-full font-noto-looped">
			<Navbar />
			{beforeContent}
			<div className={`px-${px} py-${py}`}>{children}</div>
		</div>
	)
}
