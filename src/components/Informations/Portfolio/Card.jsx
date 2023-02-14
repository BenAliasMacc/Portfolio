import { useState } from "react";

const Card = ({ img }) => {
    
    const [hidden, setHidden] = useState(true);

    return (
        <div className="rounded-lg p-6 dark:border-[2px] border-[#212425] mb-6">            
            <div className="relative overflow-hidden rounded-lg">
                <div onMouseLeave={() => setHidden(true)} className={`absolute ${hidden ? "hidden" : "flex"} justify-end flex-col items-center bg-black bg-opacity-60 w-full h-full`}>
                    <a href="" className="border-solid-white border-2 rounded-2xl text-white text-center mb-3 w-48">Lien vers le site</a>
                    <a href="" className="border-solid-white border-2 rounded-2xl text-white text-center mb-3 w-48">Lien vers Github</a>
                </div>
                <img src={img} alt="" onMouseEnter={() => setHidden(false)} className="w-full object-cover" />
            </div>
            <span className='pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]'>UI/UX</span>
            <h2 className='font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2'>Chul urina</h2>
        </div>
    );
};

export default Card;