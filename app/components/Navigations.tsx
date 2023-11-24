'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigations() {
    const pathname = usePathname();

    return (
        <nav className="flex gap-[20px] w-[265px] h-[60px] bg-[#242424] rounded-[60px] justify-center items-center">
            <Link href='/' className={pathname === '/' ? 'text-[#242424] bg-[#F4F4F4] rounded-[30px] px-[12px] py-[6px]'
                : 'text-[#F4F4F4]'} >Home</Link>
            <Link href='/favorite' className={pathname === '/favorite' ? 'text-[#242424] bg-[#F4F4F4] rounded-[30px] px-[12px] py-[6px]'
                : 'text-[#F4F4F4]'} >Favorite</Link>
        </nav>
    )
}