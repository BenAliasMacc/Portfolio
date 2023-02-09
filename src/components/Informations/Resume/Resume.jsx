import education from '../../../assets/education.svg';
import experience from '../../../assets/experience.svg';
import Header from './Header';
import Card from './Card';
import Skills from './Skills';

const Resume = () => {
    return (
        <>
            <div className='container px-4 sm:px-5 md:px-10 lg:px-14'>
                <div className='py-12'>
                    <h2 className='after-effect after:left-32'>CV</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px] text-white'>
                        <div>
                            <Header icon={education} altText="education" title="Formation" />
                            <div>
                                <Card year='2021-2023' formation="Ph.D in Horriblensess" place="ABC University, Los Angeles, CA" />
                                <Card year='2021-2023' formation="Ph.D in Horriblensess" place="ABC University, Los Angeles, CA" />
                                <Card year='2021-2023' formation="Ph.D in Horriblensess" place="ABC University, Los Angeles, CA" />                        
                            </div>
                        </div>
                        <div>
                            <Header icon={experience} altText="expérience" title="Expérience" />
                            <div>
                                <Card year='2017-2021' formation="Computer Science" place="Imperialize Technical Institute" />                
                                <Card year='2017-2021' formation="Computer Science" place="Imperialize Technical Institute" />                
                                <Card year='2017-2021' formation="Computer Science" place="Imperialize Technical Institute" />                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container bg-color-810 dark:bg-[#0D0D0D] py-12 px-4 sm:px-5 md:px-10 lg:px-20'>
                <div className=''>
                    <h4 className='text-2xl dark:text-white font-medium mb-8'>Compétences</h4>
                    <div className='flex gap-x-3 gap-y-3 md:gap-y-3 md:gap-x-3 flex-wrap'>
                        <Skills skill="React JS" />
                        <Skills skill="Redux & Redux Toolkit" />
                        <Skills skill="Node Js" />
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