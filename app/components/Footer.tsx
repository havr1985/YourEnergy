import Image from "next/image";
import { Facebook } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { Instagram } from 'lucide-react';
import Form from "./Form";


export default function Footer() {
    return (
        <footer className="bg-[#242424] mt-[196px]">
            <div className="container mx-auto px-[32px] pt-[64px] pb-[32px] flex justify-between">
                <div>
                    <Image src='/logo1.svg' alt="logo" width={132} height={24}/>
                    <ul className="mt-[40px] flex gap-[24px] ">
                        <li className="w-[44px] h-[44px] flex justify-center items-center">
                          <a href="" className=" border-solid border border-[#f4f4f430] rounded-[10px] p-[8px]">
                          <Facebook size={40} color="#f4f4f4"/>
                          </a>
                        </li>
                        <li className="w-[44px] h-[44px] flex justify-center items-center">
                          <a href="" className=" border-solid border border-[#f4f4f430] rounded-[10px] p-[8px]">
                          <Youtube size={40} color="#f4f4f4"/>
                           </a>
                        </li>
                        <li className="w-[44px] h-[44px] flex justify-center items-center">
                           <a href="" className=" border-solid border border-[#f4f4f430] rounded-[10px] p-[8px]">
                           <Instagram size={40} color="#f4f4f4"/>
                           </a>
                        </li>
                    </ul>
                    <p className=" mt-[114px] text-[#c6cdd1]">Your Energy. All rights reserved.</p>
                </div>
                <div>
                    <h2 className="max-w-[554px] text-5xl text-[#f4f4f4]">Transforming your body shape with us</h2>
                    <div className=" flex mt-[125px] gap-[4px] text-[#c6cdd1]">
                        <a href="">Privacy Policy</a>
                        <p>/</p>
                        <a href="">Terms of Service</a>
                    </div>
                </div>
                <div>
                    <p className=" text-[#f4f4f4] mb-[20px]">Subscribe and learn about new exercises!</p>
                    <Form />
                    <p className="text-[#c6cdd1] mt-[60px]">@2023</p>
                </div>

            </div>
        </footer>
    )
}