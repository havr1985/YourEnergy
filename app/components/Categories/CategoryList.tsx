import Image from "next/image";
import { lazy } from "react";

interface Data{
    page: number;
    perPage: number;
    totalPages: number;
    results: Results[];
};

interface Results{
    filter: string;
    name: string;
    imgURL: string;

}

export default function CategoryList({ result }: { result: Data | undefined }) {
    const categoies = result?.results;
    return (
        <div>
            <ul className=" grid grid-cols-3 gap-[15px] gap-y-[32px]">
                {categoies?.map(({ filter, name, imgURL }) => {
                    let newName: string = name.toUpperCase();
                    return (
                        <li key={name} className=" max-w-[290px]  relative ">
                            <a href="" className=" w-[100%]">
                                <div className=" absolute w-[100%] h-full bg-[#11111180] rounded-[12px]">
                                </div>
                                <Image src={imgURL} alt={name} width={290} height={242}
                                    className=" rounded-[12px] " />
                                <div className=" absolute  top-[50%] left-[50%]
                                 -translate-x-[50%] -translate-y-[50%] text-center ">
                                  <p className=" text-[#F4F4F4] text-xl">{newName}</p>
                                  <p className=" text-[#F4F4F460] tx-sm">{filter}</p>
                                </div>
                            </a>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}