import type { FC, ReactNode } from 'react'

import { Navbar } from '../Navbar'

interface LayoutProps {
	beforeContent?: ReactNode
	children: ReactNode
	psize?: 'none' | 'large'
}

export const Layout: FC<LayoutProps> = ({ children, beforeContent, psize = 'none' }) => {
	return (
		<div className="flex flex-col w-full font-noto-looped max-w-screen overflow-x-hidden">

			<Navbar />
			{beforeContent}
			<div className={psize === 'none' ? 'p-0' : 'p-20'}>{children}</div>
		</div>
	)
}
