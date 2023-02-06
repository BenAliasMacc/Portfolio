import phone from '../../assets/phone.svg';
import mail from '../../assets/mail.svg';
import location from '../../assets/location.svg';
import calendar from '../../assets/calendar.svg';

const Contacts = () => {
    return (
        <div className='p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]'>
            <div className="flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A]">
                <div className="socialButton bg-white dark:bg-black text-[#E93B81] shadow-md">
                    <img src={phone} alt="Téléphone" />
                </div>
                <div className="text-left ml-2.5">
                    <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">Téléphone</p>
                    <p className="dark:text-white break-all">
                       <a className="hover:text-[#FA5252] duration-300 transition" href="tel:+332668842">+33 6 32 66 88 42</a> 
                    </p>
                </div>
            </div>
            <div className="flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A]">
                <div className="socialButton bg-white dark:bg-black text-[#E93B81] shadow-md">
                    <img src={location} alt="" />
                </div>
                <div className="text-left ml-2.5">
                    <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">Localisation</p>
                    <p className="dark:text-white break-all">Paris, France</p>
                </div>
            </div>
            <div className="flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A]">
                <div className="socialButton bg-white dark:bg-black text-[#E93B81] shadow-md">
                    <img src={mail} alt="" />
                </div>
                <div className="text-left ml-2.5">
                    <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">Email</p>
                    <p className="dark:text-white break-all">
                       <a className="hover:text-[#FA5252] duration-300 transition" href="mailto:raymond.benoit@orange.fr">raymond.benoit@orange.fr</a> 
                    </p>
                </div>
            </div>
            <div className="flex py-2.5">
                <div className="socialButton bg-white dark:bg-black text-[#E93B81] shadow-md">
                    <img src={calendar   } alt="" />
                </div>
                <div className="text-left ml-2.5">
                    <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">Date de naissane</p>
                    <p className="dark:text-white break-all">02 Septembre 1986</p>
                </div>
            </div>
        </div>
    )
};

export default Contacts;