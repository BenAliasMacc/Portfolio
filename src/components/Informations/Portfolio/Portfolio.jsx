import Card from "./Card";

const Portfolio = () => {
    return (
        <div className="container mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
            <div className="py-12">
                <h2 className="after-effect after:left-44">Portfolio</h2>
                <div className="portfolio-grid">
                    <div className="portfolio-grid_column w-1/2">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <div className="portfolio-grid_column w-1/2">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;