'use client'

import { useEffect, useState } from "react";
import { getCatFilters } from "../../services/getCategory";
import CategoryList from "./CategoryList";
import { Pagination } from "flowbite-react";

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

export default function FiltredCategories() {
    const [filter, setFilter] = useState<string>('Muscles');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [result, setResult] = useState<Data>();
    const [currentPage, setCurrentPage] = useState<number>(1);
    let totalPage: number = 0; 


    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        let res: string = (e.currentTarget.id);
        setFilter(res);
        setCurrentPage(1);
    };

    const onPageChange = (page: number) => setCurrentPage(page);

    useEffect(() => {
        async function getCat() {
            try {
                setLoading(true);
                setError(false);
                const data: Data = await getCatFilters(filter, currentPage);
                setResult(data);
                
                
                
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        getCat()
    }, [filter, currentPage]);


    return (
        
        <div className="mt-[64px] max-w-[900px] ">
            <ul className=" flex gap-[20px] mb-[50px] justify-end">
                <li>
                    <button type="button" id="Muscles" onClick={onClick}
                        className={filter === 'Muscles' ? 'border-b-2 border-[#242424]' : ''}>Muscles
                    </button>
                </li>
                <li>
                    <button type="button" id="Body parts" onClick={onClick}
                    className={filter === 'Body parts' ? 'border-b-2 border-[#242424]' : ''}>Body parts</button>
                </li>
                <li>
                    <button type="button" id="Equipment" onClick={onClick}
                    className={filter === 'Equipment' ? 'border-b-2 border-[#242424]' : ''}>Equipment</button>
                </li>
            </ul>
            {loading && (<div className=" text-red-800">LOADING...</div>)}
            {error && (<div>Error...</div>)}
            <CategoryList result={result} />
            <div className="flex  justify-center mt-[16px]">
                <Pagination currentPage={currentPage} totalPages={result?.totalPages !== undefined ? totalPage = result.totalPages : 0} onPageChange={onPageChange} />
            </div>
        </div>
            
    )
}