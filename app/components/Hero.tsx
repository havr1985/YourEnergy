import Image from "next/image";

export default function Hero() {
    return (
        <section >
            <div className=" mt-[96px] flex justify-between">
            <div className=" w-[593px]">
                <div className="flex text-center mb-[20px]">
                    <h1 className=" text-[74px] font-normal tracking-[-1.48px] leading-[100%]">Get Body in shape, Stay healthy</h1>
                </div>
                <p>Transform your physique and embrace a healthier lifestyle with our comprehensive fitness and nutrition support.</p>
            </div>
            <div className=" w-[180px]">
                <Image src='/young-women.png' alt="young women" width={170} height={100} />
                <ul className=" flex flex-wrap gap-[5px] mt-[50px]  justify-center mb-[32px]">
                    <li className=" border-solid border border-[#242424] rounded-[30px] px-[10px] py-[4px]">
                        <p>#Sport</p>
                    </li>
                    <li className=" border-solid border border-[#242424] rounded-[30px] px-[10px] py-[4px]">
                        <p>#Healthy</p>
                    </li>
                    <li className=" border-solid border border-[#242424] rounded-[30px] px-[10px] py-[4px]">
                        <p>#Workout</p>
                    </li>
                    <li className=" border-solid border border-[#242424] rounded-[30px] px-[10px] py-[4px]">
                        <p>#Diet</p>
                    </li>
                </ul>
                </div>
                </div>
            <Image src='/women-sport.png' alt="women" height={350} width={1280} className=" w-[100%] rounded-[60px]"/>
        </section>
    )
}