import { BikeIcon } from 'lucide-react';


 async function getData() {
  const res = await fetch('https://your-energy.b.goit.study/api/quote')
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
};

interface Data{
  author: string;
  quote: string;
}

export default async function Quote() {
  const data: Data = await getData()
  return (
    <div className=" max-w-[444px] bg-[#242424] p-[40px] flex gap-[16px] rounded-[20px]">
        <BikeIcon size={34} color="#F4F4F4" className=" bg-gray-700 p-[4px] rounded-[50%]" />
      <div>
        <h3 className=" text-[#F4F4F4] text-2xl	mb-[6px] ">Quote of the day</h3>
        <p className=" text-[#F4F4F499] text-sm mb-[18px]">{data.quote}</p>
        <p className=" text-[#F4F4F4] text-base	">{data.author}</p>
        </div>
      
    </div>
  )
}