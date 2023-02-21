import { useState } from "react";

const Card = ({ img, link, githubLink, title, stack }) => {

    return (
        <div className="rounded-lg p-6 dark:border-[2px] border-[#212425] mb-6">            
            <div className="relative overflow-hidden rounded-lg">
                <div className="overlay" >
                    <a href={link} className="border-solid-white border-2 rounded-2xl text-white text-center mb-3 w-48">Lien vers le site</a>
                    <a href={githubLink} className="border-solid-white border-2 rounded-2xl text-white text-center mb-3 w-48">Lien vers Github</a>
                </div>
                <img src={img} alt="" className="w-full h-48 object-cover rounded-md p-px" />
            </div>
            <span className='pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]'>{stack}</span>
            <h2 className='font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2'>{title}</h2>
        </div>
    );
};

export default Card;