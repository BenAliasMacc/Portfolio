import atem from '../../../assets/portfolio/atem.jpg';
import petitsPlats from '../../../assets/portfolio/petitsPlats.jpg';
import gameOn from '../../../assets/portfolio/gameOn.jpg';
import netflix from '../../../assets/portfolio/netflix.jpg';
import image from '../../../assets/portfolio/header-bg.avif'
import Card from "./Card";

const Portfolio = () => {
    return (
        <div className="mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
            <div className="pt-12 pb-6">
                <h2 className="after-effect after:left-44">Portfolio</h2>
                <div className="portfolio-grid mt-8">
                    <div className="portfolio-grid_column w-1/2">
                        <Card img={atem} />
                        <Card img={petitsPlats} />
                        <Card img={gameOn} />
                    </div>
                    <div className="portfolio-grid_column w-1/2">
                        <Card img={netflix} />
                        <Card img={image} />
                        <Card img={image} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;