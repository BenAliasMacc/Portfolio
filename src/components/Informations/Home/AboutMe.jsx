const AboutMe = () => {
    return (
        <div className='pt-12 md:pt-12 px-2 sm:px-5 md:px-10 lg:px-14'>
            <h2 className="flex align-center after-effect after:left-52 after:block after:w-">A propos</h2>
            <div className='mt-8'>
                <div className="lg:grid grid-cols-12 md:gap-10 items-center ">
                    <div className="col-span-12 space-y-2.5">
                        <div className="lg:mr-16">
                            <p className="text-gray-lite dark:text-neutral-400 leading-7 text-justify">Bonjour, je suis Benoît 36 ans, jeune papa et développeur junior en reconversion. J'ai commencé à créer mes 1er pages web en HTML / CSS en 2019 avant de prendre un virage plus concret en 2021 et obtenir un le diplôme développeur d'application Front-End avec OpenClassrooms. Passionné par cette nouvelle activité et le développement de site dynamique avec Javascript et React, je suis désormais à la recherche de mon 1er emploi en tant que développeur d'application web.</p>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default AboutMe;