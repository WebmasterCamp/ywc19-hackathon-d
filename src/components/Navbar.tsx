import Link from "next/link";
import { type FC } from "react";

export const Navbar: FC = () => {
    return (
        <nav className="w-full flex px-20 py-5 bg-teal-500 text-gray-50">
            <h1 className="font-noto">
                Placeholder Name
            </h1>
            <div className="flex gap-x-4 ml-auto">
                <Link href="/">
                    หน้าแรก
                </Link>
                <Link href="/">
                    วางแผนการเงิน
                </Link>
                <Link href="/">
                    บทความ
                </Link>
                <Link href="/">
                    คำถามที่พบบ่อย
                </Link>
                <Link href="/">
                    เกี่ยวกับเรา
                </Link>
            </div>
        </nav>
    )
}

