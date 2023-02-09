const Card = ({ icon }) => {
    return (
        <div className="flex flex-wrap dark:bg-[#1D1D1D] p-[30px] border-[#A6A6A6] gap-2 rounded-xl">
            <span className="w-8 mt-2">
                <img src={icon} alt="téléphone" />
            </span>
            <div className='space-y-2'>
                <p className='text-xl font-semibold dark:text-white'>Téléphone</p>
                <p><a href="tel:+332668842" className="text-gray-lite text-lg dark:text-[#A6A6A6] ">+33 6 32 66 88 42</a></p>
            </div>
        </div>
    );
};

export default Card;