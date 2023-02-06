import icon1 from '../../../assets/whatIDo/icon-1.svg';
import icon2 from '../../../assets/whatIDo/icon-2.svg';
import icon3 from '../../../assets/whatIDo/icon-3.svg';
import icon4 from '../../../assets/whatIDo/icon-4.svg';
import icon5 from '../../../assets/whatIDo/icon-5.svg';
import icon6 from '../../../assets/whatIDo/icon-6.svg';

const WhatIDo = () => {
    return (
        <section className="pb-12 px-2 sm:px-5 md:px-10 lg:px-14">
            <h3 className="text-[35px] dark:text-white font-medium pb-5">Ma Stack</h3>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 ">
                <div className="about-box dark:bg-transparent">
                    <img src={icon1} alt="icon" />
                    <div className='space-y-2 break-all'>
                        <h3 className='dark:text-white text-xl font-semibold'>UI/Ux Design</h3>
                        <p className=' leading-8 text-gray-lite dark:text-[#A6A6A6]'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.
                        </p>
                    </div>
                </div>
                <div className="about-box dark:bg-transparent">
                    <img src={icon2} alt="icon" />
                    <div className='space-y-2 break-all'>
                        <h3 className='dark:text-white text-xl font-semibold'>App Development</h3>
                        <p className=' leading-8 text-gray-lite dark:text-[#A6A6A6]'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.
                        </p>
                    </div>
                </div>
                <div className="about-box dark:bg-transparent">
                    <img src={icon3} alt="icon" />
                    <div className='space-y-2 break-all'>
                        <h3 className='dark:text-white text-xl font-semibold'>Photography</h3>
                        <p className=' leading-8 text-gray-lite dark:text-[#A6A6A6]'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.
                        </p>
                    </div>
                </div>
                <div className="about-box dark:bg-transparent">
                    <img src={icon4} alt="icon" />
                    <div className='space-y-2 break-all'>
                        <h3 className='dark:text-white text-xl font-semibold'>Photography</h3>
                        <p className=' leading-8 text-gray-lite dark:text-[#A6A6A6]'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.
                        </p>
                    </div>
                </div>
                <div className="about-box dark:bg-transparent">
                    <img src={icon5} alt="icon" />
                    <div className='space-y-2 break-all'>
                        <h3 className='dark:text-white text-xl font-semibold'>Management</h3>
                        <p className=' leading-8 text-gray-lite dark:text-[#A6A6A6]'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.
                        </p>
                    </div>
                </div>
                <div className="about-box dark:bg-transparent">
                    <img src={icon6} alt="icon" />
                    <div className='space-y-2 break-all'>
                        <h3 className='dark:text-white text-xl font-semibold'>Web Development</h3>
                        <p className=' leading-8 text-gray-lite dark:text-[#A6A6A6]'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.
                        </p>
                    </div>
                </div>
            </div>
        </section> 
    );
};

export default WhatIDo;