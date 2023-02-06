import CV from '../../assets/CV.pdf';
import download from '../../assets/download.svg';

const CVLink = () => {
    
    return (
        <a href={CV} target="_blank" download className='flex items-center justify-center mx-auto w-3/5 gap-x-2 bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef] px-8 py-3 text-lg text-white rounded-[35px] mt-6'>
            <img src={download} alt="téléchargement" /> 
            <p className='text-xl'>Download CV</p>
        </a>
    )
};

export default CVLink;