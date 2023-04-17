import { useState } from 'react';
import phone from '../../assets/profil/phone.svg';
import phoneWhite from '../../assets/profil/phoneWhite.svg';
import location from '../../assets/profil/location.svg';
import locationWhite from '../../assets/profil/locationWhite.svg';
import mail from '../../assets/profil/mail.svg';
import mailWhite from '../../assets/profil/mailWhite.svg';
import calendar from '../../assets/profil/calendar.svg';
import calendarWhite from '../../assets/profil/calendarWhite.svg';

const Contacts = () => {

    const [iconHover, setIconHover] = useState(null);

    return (
        <div className='p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]'>
            <div className="flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A]">
                <div onMouseOver={() => setIconHover("phone")} onMouseLeave={() => setIconHover(null)} className="socialButton bg-white dark:bg-black text-[#E93B81] shadow-md">
                    <img src={iconHover === "phone" ? phoneWhite : phone} alt="Téléphone" />
                </div>
                <div className="text-left ml-2.5">
                    <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">Téléphone</p>
                    <p className="dark:text-white break-all">
                       <a className="hover:text-[#FA5252] duration-300 transition" href="tel:+332668842">+33 6 32 66 88 42</a> 
                    </p>
                </div>
            </div>
            <div className="flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A]">
                <div onMouseOver={() => setIconHover("location")} onMouseLeave={() => setIconHover(null)} className="socialButton bg-white dark:bg-black text-[#E93B81] shadow-md">
                    <img src={iconHover === "location" ? locationWhite : location} alt="Localisation" />
                </div>
                <div className="text-left ml-2.5">
                    <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">Localisation</p>
                    <p className="dark:text-white break-all">Paris, France</p>
                </div>
            </div>
            <div className="flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A]">
                <div onMouseOver={() => setIconHover("mail")} onMouseLeave={() => setIconHover(null)} className="socialButton bg-white dark:bg-black text-[#E93B81] shadow-md">
                    <img src={iconHover === "mail" ? mailWhite : mail} alt="" />
                </div>
                <div className="text-left ml-2.5">
                    <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">Email</p>
                    <p className="dark:text-white break-all">
                       <a className="hover:text-[#FA5252] duration-300 transition" href="mailto:raymond.benoit@orange.fr">raymond.benoit@orange.fr</a> 
                    </p>
                </div>
            </div>
            <div className="flex py-2.5">
                <div onMouseOver={() => setIconHover("calendar")} onMouseLeave={() => setIconHover(null)} className="socialButton bg-white dark:bg-black text-[#E93B81] shadow-md">
                    <img src={iconHover === "calendar" ? calendarWhite : calendar} alt="" />
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