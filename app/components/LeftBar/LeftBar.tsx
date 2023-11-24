import Image from "next/image";
import Quote from "./Quote";
import { BookOpenText } from 'lucide-react';

export default function LeftBar() {
    return (
        <section>
            <div className=" mt-[64px]">
                <h2 className=" text-5xl mb-[32px]">Exercises</h2>
                <Quote />
                <Image src='/two-women.png' alt="two women" width={444} height={242}
                    className=" rounded-[30px] mt-[32px]" />
                <div className=" mt-[32px] flex gap-[16px] max-w-[444px] p-[40px] bg-white rounded-[30px]">
                    <BookOpenText size={34} color="#F4F4F4" className=" bg-[#242424] p-[4px] rounded-[50%] shrink-0" />
                    <div className="">
                        <h3 className=" text-[#242424] text-2xl font-bold mb-[6px]">110 min</h3>
                        <p className=" text-[#24242499] text-sm mb-[16px]">Daily  norm of sports</p>
                        <p className=" text-[#242424] text-sm	">The World Health Organization recommends at least 150 minutes of moderate-intensity
                            aerobic physical activity throughout the week for adults aged 18-64. However, what
                            happens if we adjust that number to 110 minutes every day? While it might seem like
                            a high number to hit, dedicating 110 minutes daily to sporting activities may offer
                            unparalleled benefits to physical health, mental well-being, and overall quality of life.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}