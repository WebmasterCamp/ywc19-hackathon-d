import type { FC, ReactNode } from 'react'

import { Navbar } from '../Navbar'

interface LayoutProps {
	beforeContent?: ReactNode
	children: ReactNode
	psize: 'small' | 'large'
}

export const Layout: FC<LayoutProps> = ({ children, beforeContent, psize = 'small' }) => {
	return (
		<div className="flex flex-col w-full font-noto-looped">
			<Navbar />
			{beforeContent}
			<div className={psize === 'small' ? 'p-4' : 'p-20'}>{children}</div>
		</div>
	)
}
