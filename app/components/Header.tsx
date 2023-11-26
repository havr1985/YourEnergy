import Image from "next/image";

import Navigations from "./Navigations";


export default function Header() {
    

    return (
    <header className="flex justify-between py-[28px] items-center container mx-auto px-[32px]'">
            <Image rel="icon" src='/logo.svg' alt="logo" width={132} height={24}/>
            <Navigations/>
        <ul className="flex gap-[12px]">
            <li className="w-[44px] h-[44px] flex justify-center items-center">
                <a href="" className=" border-solid border border-[#2424241A] rounded-[10px] p-[8px]">
                    <Image src="/facebook.svg" alt="facebook" width={28} height={28}  />
                </a>
            </li>
            <li className="w-[44px] h-[44px] flex justify-center items-center">
                <a href="" className=" border-solid border border-[#2424241A] rounded-[10px] p-[8px]">
                    <Image src="/youtube.svg" alt="youtube" width={28} height={28} />
                </a>
            </li>
            <li className="w-[44px] h-[44px] flex justify-center items-center">
                <a href="" className=" border-solid border border-[#2424241A] rounded-[10px] p-[8px]">
                    <Image src="instagram.svg" alt="instagram" width={28} height={28} />
                </a>
            </li>
        </ul>
    </header>
    )
}