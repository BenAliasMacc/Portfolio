import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';

const SocialNetwork = () => {
    return (
        <div className="flex justify-center space-x-3">
            <a className="socialButton bg-[#F3F6F6] dark:bg-[#1D1D1D] text-[#ffffff]" href='https://www.linkedin.com/in/benoit-raymond-dev' target="_blank">
                <img src={linkedin} alt="profil linkedin" />
            </a>                        
            <a className="socialButton bg-[#F3F6F6] dark:bg-[#1D1D1D]" href='https://github.com/BenAliasMacc' target="_blank">
                <img src={github} alt="profil github" />
            </a>                        
        </div>
    )
};

export default SocialNetwork;