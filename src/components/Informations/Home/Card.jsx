const Card = ({ icon, title, children}) => {
    return (
        <div className="about-box dark:bg-transparent">
            <img src={icon} alt="icon" className='class="w-10 h-10 object-contain block"' />
            <div className='space-y-2 break-all'>
                <h3 className='dark:text-white text-xl font-semibold'>{title}</h3>
                <p className=' leading-8 text-gray-lite dark:text-[#A6A6A6]'>
                    {children}
                </p>
            </div>
        </div>
    );
};

export default Card;