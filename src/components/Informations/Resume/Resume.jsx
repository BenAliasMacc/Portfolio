import education from '../../../assets/resume/education.svg';
import experience from '../../../assets/resume/experience.svg';
import medal from '../../../assets/resume/medal.svg';
import diplome from '../../../assets/resume/diplome.pdf';
import Header from './Header';
import Card from './Card';
import Skills from './Skills';

const Resume = () => {
    
    return (
        <>
            <div className='px-4 sm:px-5 md:px-10 lg:px-14'>
                <div className='pt-12'>
                    <h2 className='after-effect after:left-32'>CV</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-8 text-white'>
                        <div>
                            <Header icon={education} altText="education" title="Formation" />
                            <div>
                                <Card year='2021-2022' formation="Développeur d'application Front-end" place="OpenClassroom - Formation à distance" >
                                    <a href={diplome} target="_blank"><img src={medal} alt="Lien diplôme" /></a>
                                </Card>
                                <Card year='2009-2011' formation="DEESMA" place="Ecole internationale Tunon - Paris" />
                                <Card year='2021-2023' formation="Bachelor en commerce international" place="Coventry University" />                        
                            </div>
                        </div>
                        <div>
                            <Header icon={experience} altText="expérience" title="Expérience" />
                            <div>
                                <Card year='2023' formation="Réseau social" place="Projet personnel" />                
                                <Card year='2022' formation="Call Direct" place="Projet freelance" />                
                                <Card year='2022' formation="Atem Rénovation" place="Projet freelance" />                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-color-810 pb-12 px-4 sm:px-5 md:px-10 lg:px-20'>
                <div className='mt-2'>
                    <h4 className='text-2xl dark:text-white font-medium mb-8'>Compétences</h4>
                    <div className='flex gap-x-3 gap-y-3 md:gap-y-3 md:gap-x-3 flex-wrap'>
                        <Skills skill="Integration de maquette" />
                        <Skills skill="Création de sit web dynamique avec React Js" />
                        <Skills skill="Gestion et création de base de données" />
                        <Skills skill="Typescript" />
                        <Skills skill="MongoDB" />
                        <Skills skill="Express" />
                        <Skills skill="Tailwind CSS" />
                        <Skills skill="Bootstrap" />
                    </div>
                </div>
            </div>
        </>
    )
};

export default Resume;