import profilPic from '../../assets/profil-pic.png';
import Contacts from './Contacts';
import SocialNetwork from './SocialNetwork';

const Profil = () => {
    return (
        <aside className="bg-black col-span-12 lg:col-span-4 rounded-[20px] bg-white dark:bg-[#111111]">
            <div className="relative w-full">
                <img src={profilPic} alt="photo de profil" className='absolute left-[50%] transform -translate-x-[50%] w-[240px] h-[240px] rounded-[20px] object-cover drop-shadow-xl mt-[-140px]' />
                <div className="pt-[100px] pb-8 text-center">
                    <h1 className="mt-6 mb-3 text-2xl font-semibold dark:text-white">
                        Benoît Raymond
                    </h1>
                    <h3 className="mb-4 px-5 py-1.5 dark:bg-[#1D1D1D] text-[#7B7B7B] dark:text-neutral-400 inline-block rounded-lg">
                        Dévelopeur Front-End
                    </h3>
                    <SocialNetwork />
                    <Contacts />
                </div>
            </div>
        </aside>
    )
};

export default Profil;