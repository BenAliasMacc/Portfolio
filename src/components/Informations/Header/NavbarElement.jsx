import React from 'react'

const NavbarElement = ({ setPage, page, icon, text}) => {
  return (
    <li className='w-full h-20 rounded-[10px] cursor-pointer font-poppins bg-[#F3F6F6] font-medium mx-2.5 text-xtiny text-gray-lite dark:text-[#A6A6A6] justify-center flex flex-col items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]'>
        <button onClick={() => setPage(page)} className='h-full w-full'>
            <span className="text-xl mb-1 ml-0"><img src={icon} alt="A propos de moi" className='mx-auto' /></span>
            {text}
        </button>
    </li>
  );
};

export default NavbarElement;