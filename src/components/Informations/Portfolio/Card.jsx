const Card = ({ img }) => {
    return (
        <div className="rounded-lg p-6 dark:border-[2px] border-[#212425] mb-6">
            <div className="overflow-hidden rounded-lg">
                <img src={img} alt="" className="h-52 w-full object-contain" />
            </div>
            <span className='pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]'>UI/UX</span>
            <h2 className='font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2'>Chul urina</h2>
        </div>
    );
};

export default Card