'use client'

import { useState } from "react"
import { sendEmail } from "../services/getCategory";
import toast from "react-hot-toast";



export default function Form() {
    const [formData, setFormData] = useState({ email: '' });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const result = await sendEmail(formData);
            console.log(result.message)
            if (result) {
                toast.success(`${result.message}`)
            }
        } catch (error) {
            toast.error('You are already sbscribed');
            console.log(error)
        }
    }
    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-[20px]">
            <input className=" max-w-[350px] border border-[#f4f4f4] bg-inherit p-2 rounded-[30px] text-[#f4f4f4]"
                type="email" name="email" value={formData.email} onChange={onChange} placeholder="Email" />
            <button type="submit"
                className="px-[157px] py-[12px] bg-[#f4f4f4] rounded-[30px] text-inherit
                hover:bg-inherit border border-[#f4f4f4] text-[#f4f4f4]">Send
            </button>
        </form>
    )
}