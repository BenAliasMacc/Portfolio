import atem from '../../../assets/portfolio/atem.jpg';
import petitsPlats from '../../../assets/portfolio/petitsPlats.jpg';
import gameOn from '../../../assets/portfolio/gameOn.jpg';
import netflix from '../../../assets/portfolio/netflix.jpg';
import reservia from '../../../assets/portfolio/reservia.jpg';
import ohMyFood from '../../../assets/portfolio/ohMyFood.jpg';
import Card from "./Card";

const Portfolio = () => {
    return (
        <div className="mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
            <div className="pt-12 pb-6">
                <h2 className="after-effect after:left-44">Portfolio</h2>
                <div className="portfolio-grid mt-8">
                    <div className="portfolio-grid_column w-1/2">
                        <Card img={atem} link="https://atemrenovation.fr/" githubLink="https://github.com/BenAliasMacc/Atem-Renovation" title="Atem Renovation" stack="React JS" />
                        <Card img={petitsPlats} link="https://benaliasmacc.github.io/Les-Petits-Plats/" githubLink="https://github.com/BenAliasMacc/Les-Petits-Plats" title="Les Petits Plats" stack="Vanilla JS" />
                        <Card img={gameOn} link="https://benaliasmacc.github.io/Game-On/" githubLink="https://github.com/BenAliasMacc/Game-On" title="Game-On" stack="Vanilla JS" />                        
                    </div>
                    <div className="portfolio-grid_column w-1/2">
                        <Card img={netflix} link="https://macc-netflix-clone.netlify.app/" githubLink="https://github.com/BenAliasMacc/Netflix-Clone" title="Netflix-Clone" stack="React JS" />
                        <Card img={reservia} link="https://benaliasmacc.github.io/Reservia/" githubLink="https://github.com/BenAliasMacc/Reservia" title="Reservia" stack="HTML / CSS" />
                        <Card img={ohMyFood} link="https://benaliasmacc.github.io/Oh-My-Food/" githubLink="https://github.com/BenAliasMacc/Oh-My-Food" title="Oh My Food" stack="HTML / CSS" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;