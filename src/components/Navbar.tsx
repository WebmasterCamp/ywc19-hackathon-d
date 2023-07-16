import { type FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'

export const Navbar: FC = () => {
	return (
		<nav className="w-full flex px-20 py-5 bg-teal-500 text-gray-50 relative">
			<div className="w-[140.3625px] h-[47.75px] relative">
				<Image src={'/babyfuture.svg'} fill alt="Babyfuture" />
			</div>
			<div className="flex gap-x-4 ml-auto items-center">
				<Link className="h-min" href="/">
					หน้าแรก
				</Link>
				<Link className="h-min" href="/expenses/1">
					วางแผนการเงิน
				</Link>
				<Link className="h-min" href="/blogs">
					บทความ
				</Link>
				<Link className="h-min" href="/">
					คำถามที่พบบ่อย
				</Link>
				<Link className="h-min" href="/">
					เกี่ยวกับเรา
				</Link>
			</div>
		</nav>
	)
}
