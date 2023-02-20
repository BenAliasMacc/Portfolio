const Card = ({ icon, title, text, href }) => {
    return (
        <div className="flex flex-wrap dark:bg-[#1D1D1D] p-[30px] border-[#A6A6A6] gap-2 rounded-xl">
            <span className="w-8 mt-2">
                <img src={icon} alt={title} />
            </span>
            <div className='space-y-2'>
                <p className='text-xl font-semibold dark:text-white'>{title}</p>
                <p><a href={href} className="text-gray-lite text-lg dark:text-[#A6A6A6]">{text}</a></p>
            </div>
        </div>
    );
};

export default Card;