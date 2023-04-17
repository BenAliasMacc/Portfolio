import { useState } from "react";
import home from '../../assets/navbar/home.svg';
import resume from '../../assets/navbar/resume.svg';
import portfolio from '../../assets/navbar/portfolio.svg';
import contact from '../../assets/navbar/contact.svg';
import NavButton from "./NavButton";

const BurgerMenu = ({ setPage }) => {

    const [showNav, setShowNav] = useState(false)

    const handleBurgerMenu = () => {
        setShowNav(!showNav)
    }

    const diplayNav = showNav ? "show-navbar" : ""; 

    return (
        <nav className={`${diplayNav}`} >
            <ul className='invisible rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white dark:bg-[#212425]'>
                <NavButton icon={home} name="A propos" setPage={setPage} page={1}  />
                <NavButton icon={resume} name="CV" setPage={setPage} page={2} />
                <NavButton icon={portfolio} name="Portfolio" setPage={setPage} page={3} />
                <NavButton icon={contact} name="Contact" setPage={setPage} page={4} />
            </ul>

            <button onClick={handleBurgerMenu} className="flex items-center justify-center cursor-pointer p-0 m-10 w-10 h-10 bg-[#ef4060] rounded-full" >
                <span className="burger-button block w-6 transition-all"></span>
            </button>
        </nav>
    );
};

export default BurgerMenu;