const NavButton = ({ icon, name, setPage, page }) => {
    return (
        <li className="mb-1 mx-2">
            <button onClick={() => setPage(page)} className="navButton rounded-md w-full cursor-pointer font-poppins bg-white text-gray-lite font-medium flex text-xtiny py-2.5 px-2 md:px-4 xl:px-5 items-center dark:hover:text-white dark:bg-[#212425] hover:text-white dark:text-[#A6A6A6] text-white bg-gradient-to-r  ">
                <span className="mr-4 "><img src={icon} alt={name} /></span> {name}
            </button>
        </li>
    );
};

export default NavButton;