import education from '../../../assets/resume/education.svg';
import experience from '../../../assets/resume/experience.svg';
import medal from '../../../assets/resume/medal.svg';
import diplome from '../../../assets/resume/diplome.pdf';
import Header from './Header';
import Card from './CardTraining';
import Skills from './Skills';
import Training from './Training';
import Experience from './Experience';

const Resume = () => {
    
    return (
        <>
            <div className='px-4 sm:px-5 md:px-10 lg:px-14'>
                <div className='pt-12'>
                    <h2 className='after-effect after:left-32'>CV</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-8 text-white'>
                        <Training />
                        <Experience />
                    </div>
                </div>
            </div>
            <div className='bg-color-810 pb-12 px-4 sm:px-5 md:px-10 lg:px-20'>
                <div className='mt-2'>
                    <h4 className='text-2xl dark:text-white font-medium mb-8'>Compétences</h4>
                    <div className='flex gap-x-3 gap-y-3 md:gap-y-3 md:gap-x-3 flex-wrap'>
                        <Skills skill="Integration de maquette" />
                        <Skills skill="Création de site web dynamique en vanilla et React Js" />
                        <Skills skill="Maîtrise des opérations CRUD côté Front" />
                        <Skills skill="Gestion et création de base de données avec la stack MERN" />
                    </div>
                </div>
            </div>
        </>
    )
};

export default Resume;