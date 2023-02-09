import home from '../../assets/home.svg'
import resume from '../../assets/resume.svg'
import portfolio from '../../assets/portfolio.svg'
import contact from '../../assets/contact.svg'

const Header = ({ setPage }) => {
    return (

        <header className="lg:w-[526px] h-[144px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-white dark:bg-[#111111]">
            <nav className="hidden lg:block">
                <ul className="flex justify-between">
                    <li className='w-20 h-20 rounded-[10px] font-poppins bg-[#F3F6F6] font-medium mx-2.5 text-xtiny text-gray-lite dark:text-[#A6A6A6] justify-center flex flex-col items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] lg:text-white lg:dark:text-white lg:bg-gradient-to-r from-[#FA5252] to-[#DD2476]'>
                        <button onClick={() => setPage(1)} className='h-full w-full'>
                            <span className="text-xl mb-1 ml-0"><img src={home} alt="A propos de moi" className='mx-auto' /></span>
                            A propos
                        </button>
                    </li>
                    <li className='w-20 h-20 rounded-[10px] font-poppins bg-[#F3F6F6] font-medium mx-2.5 text-xtiny text-gray-lite dark:text-[#A6A6A6] justify-center flex flex-col items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] lg:text-white lg:dark:text-white lg:bg-gradient-to-r from-[#FA5252] to-[#DD2476]'>
                        <button onClick={() => setPage(2)} className='h-full w-full'>
                            <span className="text-xl mb-1 ml-0"><img src={resume} alt="curriculum vitae" className='mx-auto' /></span>
                            CV
                        </button>
                    </li>
                    <li className='w-20 h-20 rounded-[10px] font-poppins bg-[#F3F6F6] font-medium mx-2.5 text-xtiny text-gray-lite dark:text-[#A6A6A6] justify-center flex flex-col items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] lg:text-white lg:dark:text-white lg:bg-gradient-to-r from-[#FA5252] to-[#DD2476]'>
                        <button onClick={() => setPage(3)} className='h-full w-full'>
                            <span className="text-xl mb-1 ml-0"><img src={portfolio} alt="portfolio" className='mx-auto' /></span>
                            Portfolio
                        </button>
                    </li>
                    <li className='w-20 h-20 rounded-[10px] font-poppins bg-[#F3F6F6] font-medium mx-2.5 text-xtiny text-gray-lite dark:text-[#A6A6A6] justify-center flex flex-col items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] lg:text-white lg:dark:text-white lg:bg-gradient-to-r from-[#FA5252] to-[#DD2476]'>
                        <button onClick={() => setPage(4)} className='h-full w-full'>
                            <span className="text-xl mb-1 ml-0"><img src={contact} alt="contact" className='mx-auto' /></span>
                            Contact
                        </button>
                    </li>
                    
                </ul>
            </nav>
        </header>
    )
};

export default Header;