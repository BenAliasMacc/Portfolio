import Contact from './Contact/Contact';
import Home from './Home/Home';
import Portfolio from './Portfolio/Portfolio';
import Resume from './Resume/Resume';

const InformationsMain = ({ page }) => {

    const displayChoosePage = (elt) => {
        switch (elt) {
            case 1 :
                return <Home />;
            case 2 :
                return <Resume />;
            case 3 :
                return <Portfolio />;
            case 4 :
                return <Contact />;
            default :
                return <Home />
        };
    };

    return (
        <div className='lg:rounded-2xl lg:h-screen bg-white dark:bg-[#111111] scrollbar overflow-x-hidden'>
            {displayChoosePage(page)}
        </div>
    );
};

export default InformationsMain;