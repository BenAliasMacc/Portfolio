import profilPic from '../../assets/profil-pic.png';
import Contacts from './Contacts';
import CVLink from './CVLink';
import SocialNetwork from './SocialNetwork';

const Profil = () => {
    return (
        <aside className="col-span-12 lg:col-span-4 mt-44">
            <div className="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0 ">
                <img src={profilPic} alt="photo de profil" className='absolute left-[50%] transform -translate-x-[50%] w-[240px] h-[240px] rounded-[20px] object-cover drop-shadow-xl mt-[-140px]' />
                <div className="pt-[100px] pb-8 text-center">
                    <h1 className="mt-6 mb-3 text-2xl font-semibold dark:text-white">
                        Benoît Raymond
                    </h1>
                    <h3 className="mb-4 px-5 py-1.5 dark:bg-[#1D1D1D] text-[#7B7B7B] dark:text-neutral-400 inline-block rounded-lg">
                        Dévelopeur d'application Front-End
                    </h3>
                    <SocialNetwork />
                    <Contacts />
                    <CVLink />
                </div>
            </div>
        </aside>
    )
};

export default Profil;