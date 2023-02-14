import home from '../../../assets/navbar/home.svg'
import resume from '../../../assets/navbar/resume.svg'
import portfolio from '../../../assets/navbar/portfolio.svg'
import contact from '../../../assets/navbar/contact.svg'
import NavbarElement from './NavbarElement';

const Header = ({ setPage }) => {
    return (

        <header className="lg:w-[526px] h-[144px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-white dark:bg-[#111111]">
            <nav className="hidden lg:block">
                <ul className="flex justify-between">
                    <NavbarElement setPage={setPage} page={1} icon={home} text="A propos" />
                    <NavbarElement setPage={setPage} page={2} icon={resume} text="CV" />
                    <NavbarElement setPage={setPage} page={3} icon={portfolio} text="Portfolio" />
                    <NavbarElement setPage={setPage} page={4} icon={contact} text="Contact" />
                </ul>
            </nav>
        </header>
    )
};

export default Header;