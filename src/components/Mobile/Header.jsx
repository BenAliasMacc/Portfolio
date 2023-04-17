import BurgerMenu from "./BurgerMenu";

const Header = ({ navBlack, setPage }) => {

    return (
        <header className={`lg:hidden fixed flex items-center justify-end dark:bg-black h-20 w-full z-10`}>
            <BurgerMenu setPage={setPage} />
        </header>
    );
};

export default Header;